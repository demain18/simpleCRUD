import { Appearance, StyleSheet, TextInput } from "react-native";
import { colors } from "@/hooks/colorScheme";
import React from "react";

export interface Props {
  children?: React.ReactNode;
  placeholder?: string;
}

export default function ({ children, placeholder, ...rest }: Props) {
  const [text, onChangeText] = React.useState("");

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#94a3b8"
      onChangeText={onChangeText}
      value={text}
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
    backgroundColor: "#f8f8f8",
    color: colors.black,
    fontSize: 14,
    fontFamily: "Poppins",
    outline: "none",
    justifyContent: "center",
  },
});
