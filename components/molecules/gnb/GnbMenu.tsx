import StyledButton from "@/components/atoms/StyledButton";
import { getRouteName } from "@/hooks/customHooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export interface Props {}

export default function GnbMenu({ ...rest }: Props) {
  const goToWrite = () => {
    router.push("/write");
  };

  const routeName = getRouteName();

  const onLogout = () => {
    AsyncStorage.clear();
    router.navigate("/");
  };

  return (
    <View style={styles.menuWrap}>
      {routeName === "write" || (
        <StyledButton
          text="Write Post"
          fitContent
          height={34}
          onPress={goToWrite}
        />
      )}
      <TouchableOpacity onPress={onLogout}>
        <Image
          style={styles.menuImg}
          source={require("@/assets/images/logout.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuWrap: {
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  menuImg: {
    width: 20,
    height: 20,
  },
});
