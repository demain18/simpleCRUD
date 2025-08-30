import { useRoute } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export interface Props {}

export default function GnbLogo({ ...rest }: Props) {
  const navigation = useNavigation();
  const route = useRoute(); // useRoute 훅을 사용해 현재 라우트 객체를 가져옵니다.
  const currentRoute = route.name;
  const routeName = currentRoute.split(/[/-]/).pop();

  console.log(routeName);

  return (
    <TouchableOpacity
      style={styles.logoWrap}
      onPress={() => {
        routeName === "board" || navigation.goBack();
      }}
    >
      <Image
        style={styles.logoImg}
        source={require("@/assets/images/simpleCRUDlogo.png")}
      />

      <Text style={styles.logoText}>simpleCRUD</Text>
    </TouchableOpacity>
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
