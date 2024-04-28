import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import logoImg from '@assets/logo.png'
import { CaretLeft } from 'phosphor-react-native'
import { theme } from "@theme/index";
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {

    const navigation = useNavigation()

    function handleGoBack(){
        navigation.navigate('groups')
    }

    return (
        <View style={styles.container}>

            {
                showBackButton &&
                <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                    <CaretLeft color={theme.COLORS.WHITE} size={32} />
                </TouchableOpacity>
            }

            <Image style={styles.logo} source={logoImg} />
        </View>
    )
}