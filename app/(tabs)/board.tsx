import BoardWrite from "@/components/organisms/board/BoardWrite";
import Gnb from "@/components/organisms/gnb/Gnb";
import { Text, View, StyleSheet } from "react-native";

export interface Props {}

export default function Board({ ...rest }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <Gnb />
      <BoardWrite />
    </View>
  );
}

const styles = StyleSheet.create({});
