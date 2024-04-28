import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 20,
        backgroundColor: theme.COLORS.GREEN_700
    },
    containerSecondary: {
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 20,
        backgroundColor: theme.COLORS.RED_DARK
    },
    title: {
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.WHITE,
        fontFamily: theme.FONT_FAMILY.BOLD
    }
})