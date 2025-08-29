import StyledButton from "@/components/atoms/StyledButton";
import { Text, View, StyleSheet, Image } from "react-native";

export interface Props {}

export default function GnbMenu({ ...rest }: Props) {
  return (
    <View style={styles.menuWrap}>
      <StyledButton text="Write Post" fitContent height={34} />
      <Image
        style={styles.menuImg}
        source={require("@/assets/images/user-circle.png")}
      />
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
