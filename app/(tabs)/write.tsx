import StyledButton from "@/components/atoms/StyledButton";
import Gnb from "@/components/organisms/gnb/Gnb";
import WritePost from "@/components/organisms/write/WritePost";
import { colors } from "@/hooks/colorScheme";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export interface Props {}

export default function Write({ ...rest }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.mainWrap}>
        <Gnb />
        <WritePost />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainWrap: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
