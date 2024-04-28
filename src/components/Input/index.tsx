import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { theme } from "@theme/index";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: Props) {
    return (
        <TextInput
            style={styles.container}
            ref={inputRef}
            {...rest}
            placeholderTextColor={theme.COLORS.GRAY_400}
        />
    )
}