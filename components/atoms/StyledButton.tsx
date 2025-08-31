import { colors } from "@/hooks/colorScheme";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export interface Props {
  text?: string;
  outline?: boolean;
  fitContent?: boolean;
  height?: number;
  red?: boolean;
  onPress?: () => void;
}

export default function StyledButton({
  text,
  outline,
  fitContent,
  height = 48,
  red,
  onPress,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outline && styles.outlineButton,
        fitContent && styles.fitButton,
        red && styles.redButton,
        { height: height },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          outline && styles.outlineText,
          { lineHeight: height },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    cursor: "pointer",
    borderStyle: "solid",
    boxSizing: "border-box",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderColor: colors.black,
    backgroundColor: colors.primary,
  },
  outlineButton: {
    borderColor: "none",
    backgroundColor: "none",
  },
  fitButton: {
    alignSelf: "flex-start",
    paddingLeft: 13,
    paddingRight: 13,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: colors.white,
    textAlign: "center",
    outline: "none",
  },
  outlineText: {
    color: colors.black,
  },
  redButton: {
    backgroundColor: colors.alertRed,
  },
});
