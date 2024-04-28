import { ActivityIndicator, View } from "react-native";
import { theme } from "@theme/index";
import { styles } from "./styles";


export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.loading} color={theme.COLORS.GREEN_700} />
        </View>
    )
}