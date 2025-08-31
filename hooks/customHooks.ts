import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export const getRouteName = () => {
  const route = useRoute();
  const currentRoute = route.name;
  return currentRoute.split(/[/-]/).pop();
};

export const saveUsername = async (username: string) => {
  try {
    await AsyncStorage.setItem("username", username);

    return true;
  } catch (e) {
    console.error(e);
  }
};

export const loadUsername = async () => {
  try {
    const value = await AsyncStorage.getItem("username");

    return value !== null ? value : null;
  } catch (e) {
    console.error(e);
  }
};
