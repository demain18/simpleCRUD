import { colors } from "@/hooks/colorScheme";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export interface Props {
  placeholder?: string;
  password?: boolean;
  text?: string;
  fill?: boolean;
  flex?: boolean;
  onChangeText?: (text: string) => void;
}

export default function ({
  placeholder,
  password,
  text,
  fill,
  flex = false,
  onChangeText,
  ...rest
}: Props) {
  return (
    <TextInput
      style={[
        styles.input,
        fill && styles.filledInput,
        flex ? { flex: 1 } : { width: "100%" },
      ]}
      placeholder={placeholder}
      placeholderTextColor="#94a3b8"
      onChangeText={onChangeText}
      value={text}
      autoCapitalize="none"
      secureTextEntry={password}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 46,
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    borderColor: "#d9d9de",
    borderWidth: 1,
    borderStyle: "solid",
    boxSizing: "border-box",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: colors.whiteGray,
    color: colors.black,
    fontSize: 14,
    fontFamily: "Poppins",
    outline: "none",
    justifyContent: "center",
  },
  filledInput: {
    flex: 1,
  },
});
