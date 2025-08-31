import StyledButton from "@/components/atoms/StyledButton";
import GnbLogo from "@/components/molecules/gnb/GnbLogo";
import GnbMenu from "@/components/molecules/gnb/GnbMenu";
import { Text, View, StyleSheet, Image, Platform } from "react-native";

export interface Props {}

export default function Gnb({ ...rest }: Props) {
  const deviceOS = Platform.OS;

  return (
    <View style={[styles.gnbStyled, deviceOS !== "web" && { paddingTop: 45 }]}>
      <View style={[styles.contentWrap]}>
        <GnbLogo />
        <GnbMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gnbStyled: {
    width: "100%",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    shadowColor: "rgba(3,3,3,0.1)",
    shadowOpacity: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  contentWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
