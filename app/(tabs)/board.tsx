import BoardPost from "@/components/molecules/board/BoardPost";
import BoardWrite from "@/components/organisms/board/BoardWrite";
import Gnb from "@/components/organisms/gnb/Gnb";
import { colors } from "@/hooks/colorScheme";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export interface Props {}

export default function Board({ ...rest }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, backgroundColor: colors.bgGray }}>
        <Gnb />
        <BoardWrite />
        {/* <BoardPost /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
