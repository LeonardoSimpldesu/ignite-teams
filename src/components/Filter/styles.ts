import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderColor: theme.COLORS.GREEN_700,

        borderWidth: 1,
        borderStyle: 'solid',
        marginRight: 12,
        borderRadius: 4,
        height: 38,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerSecondary: {
        marginRight: 12,
        borderRadius: 4,
        height: 38,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.WHITE,
        textTransform: 'uppercase'
    }
})