import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.COLORS.GRAY_500,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 6,
    },
    name:{
        flex: 1,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.GRAY_200,
        fontFamily: theme.FONT_FAMILY.REGULAR
    },
    icon: {
        marginLeft: 16,
        marginRight: 4,
    }
})