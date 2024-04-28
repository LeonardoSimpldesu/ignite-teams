import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        padding: 24
    },
    form: {
        width: '100%',
        backgroundColor: theme.COLORS.GRAY_700,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 6,
    },
    headerList: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 12,
    },
    numberOfPlayers: {
        color: theme.COLORS.GRAY_200,
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.SM
    }
})