import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        backgroundColor: theme.COLORS.GRAY_500,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        color: theme.COLORS.GRAY_200,
    },
    icon: {
        marginRight: 12
    }
})