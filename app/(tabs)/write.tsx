import StyledButton from "@/components/atoms/StyledButton";
import Gnb from "@/components/organisms/gnb/Gnb";
import WritePost from "@/components/organisms/write/WritePost";
import { colors } from "@/hooks/colorScheme";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export interface Props {}

export default function Write({ ...rest }: Props) {
  return (
    <View style={styles.mainWrap}>
      <Gnb />
      <WritePost />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
