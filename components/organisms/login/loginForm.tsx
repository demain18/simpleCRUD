import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import { checkUserExist, checkUserExistDto } from "@/hooks/apiRequest";
import { loadUsername, saveUsername } from "@/hooks/customHooks";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
    // 사용자가 입력한 useState값 받아옴
    const loginData: checkUserExistDto = { username, password };
    // 계정이 존재하는지 검사
    const result = await checkUserExist(loginData);
    // 로그인 프로세스 실행
    loginProcess(result);
  };

  const loginProcess = async (result: any) => {
    // 받아온 데이터 유효성 검사
    if (Array.isArray(result) && result.length > 0) {
      const usernameLoaded = await loadUsername();

      // 아직 저장된 store 값이 없으면 새롭게 저장하고 로그인 실행
      if (usernameLoaded === null) {
        saveUsername(username);
        router.navigate("/board");
      }
    } else {
      console.error("로그인에 실패했습니다");
    }
  };

  const alreadyLoginCheck = async () => {
    const usernameLoaded = await loadUsername();
    usernameLoaded !== null && router.navigate("/board");
  };

  useEffect(() => {
    // 컴포넌트 로드시 이미 로그인 되었는지 검사
    alreadyLoginCheck();
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
