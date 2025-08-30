import Gnb from "@/components/organisms/gnb/Gnb";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export interface Props {}

export default function Post({ ...rest }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Gnb />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>This is post area.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: "center",
  },
});
