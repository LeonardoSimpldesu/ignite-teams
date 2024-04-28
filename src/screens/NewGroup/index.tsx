import { Alert, View } from "react-native";
import { styles } from "./styles";
import { Header } from "@components/Header";
import { UsersThree } from "phosphor-react-native";
import { theme } from "@theme/index";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export function NewGroup() {
    const [group, setGroup] = useState('')

    const navigation = useNavigation()
    async function handleNew() {

        try {
            if(group.trim().length === 0){
                return Alert.alert('Novo Grupo', 'Informe o nome da turma')
            }



            await groupCreate(group)
            navigation.navigate('players', { group })

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message)
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
                console.error(error)
            }

        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header showBackButton />
            <View style={styles.content}>
                <UsersThree color={theme.COLORS.GREEN_700} size={56} style={styles.icon} />
                <Highlight subtitle="crie a turma para adicionar as pessoas" title="nova Turma" />
                <Input placeholder="Nome Da Turma" onChangeText={setGroup} />

                <Button title="Criar" onPress={handleNew} />
            </View>
        </SafeAreaView>
    )
}