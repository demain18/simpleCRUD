import { Appearance, ColorSchemeName } from "react-native";

const currentScheme: ColorSchemeName = Appearance.getColorScheme();

export const colors = {
  black: currentScheme === "dark" ? "#030303" : "#030303",
  white: currentScheme === "dark" ? "white" : "white",
  primary: "#96c560",
  bgGray: "#F0F0F0",
  whiteGray: "#f8f8f8",
};
