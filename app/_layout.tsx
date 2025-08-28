import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import "@/firebase";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="login" options={{ title: "로그인" }} />
        <Stack.Screen name="register" options={{ title: "회원가입" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
