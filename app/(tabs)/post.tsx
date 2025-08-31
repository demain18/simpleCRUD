import Gnb from "@/components/organisms/gnb/Gnb";
import PostComments from "@/components/organisms/post/PostComments";
import PostContents from "@/components/organisms/post/PostContents";
import { colors } from "@/hooks/colorScheme";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";

export interface Props {}

export default function Post({ ...rest }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainWrap}
    >
      <Gnb />
      <ScrollView style={styles.postWrap}>
        <PostContents />
        <PostComments />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: colors.bgGray,
  },
  postWrap: {
    // justifyContent: "center",
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 15,
    paddingLeft: 16,
  },
});
