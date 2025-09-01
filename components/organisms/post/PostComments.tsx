import Form from "@/components/atoms/Form";
import StyledButton from "@/components/atoms/StyledButton";
import PostCommentsBox from "@/components/molecules/post/PostCommentsBox";
import {
  getComments,
  insertComment,
  insertCommentDto,
  readCommentsDto,
} from "@/hooks/apiRequest";
import { colors } from "@/hooks/colorScheme";
import { getRouteName, loadUsername } from "@/hooks/customHooks";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export interface Props {}

export default function PostComments({ ...rest }: Props) {
  const routeName = getRouteName();
  const [commentsData, setCommentsData] = useState<readCommentsDto[] | void>(
    []
  );
  const [desc, setDesc] = useState<string>("");
  const [empty, setEmpty] = useState<string>("");
  const { id } = useLocalSearchParams<{ id: string }>();

  const getCommentsData = async () => {
    const data = await getComments(id);
    setCommentsData(data);
  };

  const handleDesc = (text: string) => {
    setDesc(text);
  };

  const handleSubmit = async () => {
    const uploader = await loadUsername();
    const commentData: insertCommentDto = { id, uploader, desc };
    await insertComment(commentData);
    const data = await getComments(id);
    setCommentsData(data);
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <View style={styles.mainWrap}>
      <Text style={styles.headerText}>Comments</Text>
      <View style={styles.writeWrap}>
        <Form placeholder="Add a comment..." onChangeText={handleDesc} flex />
        <StyledButton text="Submit" onPress={handleSubmit} fitContent />
      </View>
      <FlatList
        style={styles.commentsWrap}
        data={commentsData!}
        renderItem={({ item }: { item: readCommentsDto }) => (
          <PostCommentsBox text={`${item.uploader}: ${item.desc}`} />
        )}
        scrollEnabled={false}
      ></FlatList>
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
    marginTop: 10,
  },
});
