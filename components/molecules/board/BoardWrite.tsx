import StyledButton from "@/components/atoms/StyledButton";
import { router } from "expo-router";
import { Text, View, StyleSheet, Platform } from "react-native";

export interface Props {}

export default function BoardWrite({ ...rest }: Props) {
  const deviceOS = Platform.OS;

  const goToWrite = () => {
    router.push("/write");
  };

  return (
    <View
      style={[styles.mainWrap, deviceOS !== "web" && { paddingBottom: 30 }]}
    >
      <StyledButton text="Write New Post" height={38} onPress={goToWrite} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrap: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
    boxShadow: "border-box",
    zIndex: 2,
  },
});
