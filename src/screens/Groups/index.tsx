import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useCallback, useEffect, useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { groupsGetAll } from '@storage/group/groupGetAll';

export function Groups() {
    const [groups, setGroups] = useState<string[]>([])
    const navigation = useNavigation()

    function handleNewGroup() {
        navigation.navigate('new')
    }

    async function fetchGroups() {
        try {
            const data = await groupsGetAll()
            setGroups(data)
        } catch (error) {
            console.error(error)
        }
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('players', { group })
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
    }, []))

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
            />
            <Button title='Criar nova turma' onPress={handleNewGroup} />
        </SafeAreaView>
    );
}