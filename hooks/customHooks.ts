import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export const getRouteName = () => {
  const route = useRoute();
  const currentRoute = route.name;
  return currentRoute.split(/[/-]/).pop();
};
