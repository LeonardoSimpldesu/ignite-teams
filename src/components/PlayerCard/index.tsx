import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '@theme/index'
import { Text, View } from 'react-native'
import { ButtonIcon } from '@components/ButtonIcon'


type Props = {
    name: string
    onRemove: () => void
}

export function PlayerCard({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <MaterialIcons name='person' size={24} color={theme.COLORS.GRAY_200} style={styles.icon} />
            <Text style={styles.name}>{name}</Text>
            <ButtonIcon name='close' type='SECONDARY' onPress={onRemove} />
        </View>
    )
}