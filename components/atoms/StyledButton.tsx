import { colors } from "@/hooks/colorScheme";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export interface Props {
  children?: string;
  text?: string;
  outline?: boolean;
  onPress?: () => void;
}

export default function StyledButton({
  children,
  text,
  outline,
  onPress,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, outline && styles.outlineText]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    cursor: "pointer",
    width: "100%",
    height: 44,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 8,
    borderWidth: 0,
    borderStyle: "solid",
    boxSizing: "border-box",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderColor: colors.black,
    backgroundColor: colors.primary,
  },
  outlineButton: {
    borderColor: "none",
    backgroundColor: "none",
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: colors.white,
    textAlign: "center",
    lineHeight: 20,
    outline: "none",
  },
  outlineText: {
    color: colors.black,
  },
});
