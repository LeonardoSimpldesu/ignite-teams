import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 56,
        maxHeight: 56,
        backgroundColor: theme.COLORS.GRAY_700,
        color: theme.COLORS.WHITE,
        borderRadius: 6,
        padding: 16,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.MD
    },

})