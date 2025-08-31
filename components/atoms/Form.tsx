import { Appearance, StyleSheet, TextInput } from "react-native";
import { colors } from "@/hooks/colorScheme";
import React from "react";

export interface Props {
  placeholder?: string;
  password?: boolean;
  text?: string;
  fill?: boolean;
  onChangeText?: (text: string) => void;
}

export default function ({
  placeholder,
  password,
  text,
  fill,
  onChangeText,
  ...rest
}: Props) {
  return (
    <TextInput
      style={[styles.input, fill && styles.filledInput]}
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
    width: "100%",
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
