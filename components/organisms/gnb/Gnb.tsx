import StyledButton from "@/components/atoms/StyledButton";
import GnbLogo from "@/components/molecules/gnb/GnbLogo";
import GnbMenu from "@/components/molecules/gnb/GnbMenu";
import { Text, View, StyleSheet, Image, Platform } from "react-native";

export interface Props {}

export default function Gnb({ ...rest }: Props) {
  return (
    <View style={styles.gnbStyled}>
      <View
        style={[
          styles.contentWrap,
          Platform.OS === "ios" && styles.gnbTopPadding,
        ]}
      >
        <GnbLogo />
        <GnbMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gnbStyled: {
    width: "100%",
    height: "auto",
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
  gnbTopPadding: {
    paddingTop: 40,
  },
  contentWrap: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
