import { Text, View, StyleSheet, Image } from "react-native";

export interface Props {}

export default function GnbLogo({ ...rest }: Props) {
  return (
    <View style={styles.logoWrap}>
      <Image
        style={styles.logoImg}
        source={require("@/assets/images/simpleCRUDlogo.png")}
      />

      <Text style={styles.logoText}>simpleCRUD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  logoImg: {
    width: 20,
    height: 20,
  },
  logoText: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 24,
  },
});
