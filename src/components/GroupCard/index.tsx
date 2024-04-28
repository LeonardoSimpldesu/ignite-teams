import { theme } from "@theme/index";
import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <UsersThree color={theme.COLORS.GREEN_700} size={32} style={styles.icon} weight={"fill"} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}