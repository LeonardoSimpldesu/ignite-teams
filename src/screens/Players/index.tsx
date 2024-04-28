import { Alert, FlatList, Keyboard, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { playersGetByGroupAndTeam } from "@storage/players/playersGetByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type RouteParams = {
    group: string
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('')
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

    const route = useRoute()
    const { group } = route.params as RouteParams

    const navigation = useNavigation()

    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar')
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group)
            newPlayerNameInputRef.current?.blur()
            Keyboard.dismiss()
            setNewPlayerName('')
            fetchPlayersByTeam()

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            } else {
                console.log(error)
                Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam)
        } catch (error) {
            console.log(error)
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado')
        }
    }

    async function handlePlayerRemove(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group)
            fetchPlayersByTeam()
        } catch (error) {
            console.log(error)
            Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.')
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group)
            navigation.navigate('groups')
        } catch (error) {
            Alert.alert('Remover grupo', 'Não foi possível remover o grupo.')
        }
    }

    async function handleGroupRemove() {
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                { text: 'Sim', onPress: () => groupRemove() },
                { text: 'Não', style: 'cancel' },

            ]
        )
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])


    return (
        <SafeAreaView style={styles.container}>
            <Header showBackButton />
            <Highlight title={group} subtitle="adicione a galera e separe os times" />
            <View style={styles.form}>
                <Input placeholder="Nome da pessoa" autoCorrect={false} onChangeText={setNewPlayerName} value={newPlayerName} inputRef={newPlayerNameInputRef} onSubmitEditing={handleAddPlayer} returnKeyType="done" />
                <ButtonIcon name="add" onPress={handleAddPlayer} />
            </View>
            <View style={styles.headerList}>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />}
                    horizontal
                />
                <Text style={styles.numberOfPlayers}> {players.length} </Text>
            </View>
            <FlatList
                data={players}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <PlayerCard name={item.name} onRemove={() => { handlePlayerRemove(item.name) }} />}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
                ListEmptyComponent={() => <ListEmpty message="Nenhuma pessoa neste time" />}
            />
            <Button title="Remover Turma" type="SECONDARY" onPress={handleGroupRemove}/>
        </SafeAreaView>
    )
}