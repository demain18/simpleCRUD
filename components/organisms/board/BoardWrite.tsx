import StyledButton from "@/components/atoms/StyledButton";
import { Text, View, StyleSheet } from "react-native";

export interface Props {}

export default function BoardWrite({ ...rest }: Props) {
  return (
    <View style={styles.mainWrap}>
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
  },
});
