import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import {
  getAllUsers,
  insertUserData,
  insertUserDataDto,
} from "@/hooks/apiRequest";
import { colors } from "@/hooks/colorScheme";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export interface Props {
  children?: React.ReactNode;
}

export default function RegisterForm({ children, ...rest }: Props) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (text: string) => {
    setUsername(text);
  };

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleRegister = () => {
    console.log(username, email, password);
    const userdata: insertUserDataDto = { username, email, password };

    insertUserData(userdata);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <View style={styles.registerWrap}>
      <Text style={styles.registerTitle}>Create Account</Text>
      <View style={styles.formWrap}>
        <Form
          placeholder="Username"
          text={username}
          onChangeText={setUsername}
        />
        <Form placeholder="Email" text={email} onChangeText={setEmail} />
        <Form
          placeholder="Password"
          password
          text={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonWrap}>
        <StyledButton text="Register" onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registerWrap: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 27,
    paddingRight: 27,
    flex: 1,
    justifyContent: "center",
  },
  registerTitle: {
    color: colors.black,
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 16,
  },
  formWrap: {
    rowGap: 24,
  },
  buttonWrap: {
    marginTop: 31,
  },
});
