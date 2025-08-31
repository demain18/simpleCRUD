import { getRouteName } from "@/hooks/customHooks";
import { useRoute } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export interface Props {}

export default function GnbLogo({ ...rest }: Props) {
  const routeName = getRouteName();

  return (
    <TouchableOpacity
      style={styles.logoWrap}
      onPress={() => {
        routeName === "board" || router.back();
      }}
    >
      {routeName === "board" || (
        <Image
          style={styles.logoImg}
          source={require("@/assets/images/back.png")}
        />
      )}
      <Image
        style={styles.logoImg}
        source={require("@/assets/images/logo.png")}
      />

      <Text style={styles.logoText}>simpleCRUD</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    height: 35,
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
  },
  logoImg: {
    width: 20,
    height: 20,
    marginRight: 7,
  },
  logoText: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 24,
  },
});
