import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons'
import { theme } from "@theme/index"


type ButtonIconTypeProps = 'PRIMARY' | 'SECONDARY'

type Props = TouchableOpacityProps & {
    type?: ButtonIconTypeProps
    name: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ type = 'PRIMARY', name, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <MaterialIcons name={name} color={type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK} size={24} style={styles.icon} />
        </TouchableOpacity>
    )
}