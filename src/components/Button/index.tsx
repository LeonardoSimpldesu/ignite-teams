import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = TouchableOpacityProps & {
    title: string
    type?: ButtonTypeStyleProps
}

export function Button({ type = 'PRIMARY', title, ...rest }: Props) {
    return (
        <TouchableOpacity style={type === 'PRIMARY' ? styles.container : styles.containerSecondary} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}