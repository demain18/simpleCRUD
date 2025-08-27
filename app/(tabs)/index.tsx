import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import LoginForm from "@/components/organisms/login/LoginForm";
import { useEffect } from "react";
import { Appearance, Button, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
        <LoginForm />
      </ScrollView>
    </GestureHandlerRootView>
  );
}
