import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import PostCommentsBox from "@/components/molecules/post/PostCommentsBox";
import { colors } from "@/hooks/colorScheme";
import { StyleSheet, Text, View } from "react-native";

export interface Props {}

// join걸어야 하는 작업이라 제일 마지막에 구현
export default function PostComments({ ...rest }: Props) {
  return (
    <View style={styles.mainWrap}>
      <Text style={styles.headerText}>Comments</Text>
      <View style={styles.writeWrap}>
        <Form placeholder="Add a comment..." flex />
        <StyledButton text="Submit" fitContent />
      </View>
      <View style={styles.commentsWrap}>
        <PostCommentsBox text="user1: test comment 1" />
        <PostCommentsBox text="user2: test comment 2" />
        <PostCommentsBox text="user3: test comment 3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrap: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOpacity: 1,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    marginBottom: 35,
  },
  headerText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 20,
    marginBottom: 4,
  },
  writeWrap: {
    flexDirection: "row",
    gap: 5,
  },
  commentsWrap: {
    rowGap: 4,
    marginTop: 10,
  },
});
