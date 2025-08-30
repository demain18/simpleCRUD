import Gnb from "@/components/organisms/gnb/Gnb";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { colors } from "@/hooks/colorScheme";
import PostContents from "@/components/organisms/post/PostContents";
import PostComments from "@/components/organisms/post/PostComments";

export interface Props {}

export default function Post({ ...rest }: Props) {
  return (
    <View style={styles.containerView}>
      <Gnb />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <PostContents />
        <PostComments />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: colors.bgGray,
  },
  scrollView: {
    justifyContent: "center",
  },
});
