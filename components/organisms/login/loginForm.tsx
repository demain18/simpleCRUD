import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import { Text, View, StyleSheet, Image } from "react-native";

export interface Props {
  children?: React.ReactNode;
}

export default function LoginForm({ children, ...rest }: Props) {
  return (
    <View style={styles.loginWrap}>
      <View style={styles.logoWrap}>
        <Image
          style={styles.logoImg}
          source={require("@/assets/images/Icon igloo.svg")}
        />
        <Text style={styles.logoText}>SimpleCRUD</Text>
      </View>
      <View style={styles.gap16}>
        <Form placeholder="Username" />
        <Form placeholder="Password" />
      </View>
      <View style={styles.marginTop24}>
        <StyledButton text="Login" />
      </View>
      <StyledButton text="Go to Registration" outline />
    </View>
  );
}

const styles = StyleSheet.create({
  loginWrap: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 27,
    paddingRight: 27,
    flex: 1,
    justifyContent: "center",
  },
  logoWrap: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 8,
  },
  logoImg: {
    width: 30,
    height: 30,
  },
  logoText: {
    color: "#030303",
    fontSize: 24,
    fontFamily: "Poppins",
    letterSpacing: -0.6,
    lineHeight: 32,
  },
  gap16: {
    rowGap: 16,
    marginTop: 32,
  },
  marginTop24: {
    marginTop: 24,
  },
});
