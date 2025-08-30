import StyledButton from "@/components/atoms/StyledButton";
import { Text, View, StyleSheet, Platform } from "react-native";

export interface Props {}

export default function BoardWrite({ ...rest }: Props) {
  const deviceOS = Platform.OS;

  return (
    <View
      style={[styles.mainWrap, deviceOS !== "web" && { paddingBottom: 30 }]}
    >
      <StyledButton text="Write New Post" height={38} />
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
