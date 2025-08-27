import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import LoginForm from "@/components/organisms/login/loginForm";
import { useEffect } from "react";
import { Appearance, Button, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <LoginForm />
    </GestureHandlerRootView>
  );
}
