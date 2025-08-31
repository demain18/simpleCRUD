import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import {
  checkUserExist,
  checkUserExistDto,
  getAllUsers,
} from "@/hooks/apiRequest";
import { loadUsername, saveUsername } from "@/hooks/customHooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export interface Props {
  children?: React.ReactNode;
}

export default function LoginForm({ children, ...rest }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (text: string) => {
    setUsername(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    const loginData: checkUserExistDto = { username, password };
    const res = await checkUserExist(loginData);

    if (Array.isArray(res) && res.length > 0) {
      console.log("로그인 성공");

      const username_store = await loadUsername();

      if (username_store === null) {
        saveUsername(username);
        router.navigate("/board");
      }
    } else {
      console.error("로그인에 실패했습니다");
    }
  };

  const isLogin = async () => {
    const AsyncItemUsername = await loadUsername();

    AsyncItemUsername !== null && router.navigate("/board");
  };

  useEffect(() => {
    isLogin();
  });

  return (
    <View style={styles.loginWrap}>
      <View style={styles.logoWrap}>
        <Image
          style={styles.logoImg}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={styles.logoText}>SimpleCRUD</Text>
      </View>
      <View style={styles.gap16}>
        <Form
          placeholder="Username"
          text={username}
          onChangeText={handleUsername}
        />
        <Form
          placeholder="Password"
          password
          text={password}
          onChangeText={handlePassword}
        />
      </View>
      <View style={styles.marginTop24}>
        <StyledButton text="Login" onPress={handleLogin} />
      </View>
      <StyledButton
        text="Go to Registration"
        outline
        onPress={() => router.push("/register")}
      />
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
