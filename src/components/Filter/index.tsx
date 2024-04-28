import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type FilterStyleProps = {
    isActive?: boolean
}

type Props = FilterStyleProps & TouchableOpacityProps & {
    title: string
}

export function Filter({ isActive = false, title, ...rest }: Props) {
    return (
        <TouchableOpacity style={isActive ? styles.container : styles.containerSecondary} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}