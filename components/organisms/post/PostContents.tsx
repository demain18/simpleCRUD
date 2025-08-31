import StyledButton from "@/components/atoms/StyledButton";
import PostContentsBody from "@/components/molecules/post/PostContentsBody";
import PostContentsHeader from "@/components/molecules/post/PostContentsHeader";
import { getPost, readPostDto } from "@/hooks/apiRequest";
import { tempValues } from "@/hooks/colorScheme";
import { loadUsername } from "@/hooks/customHooks";
import { useFocusEffect } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export interface Props {}

export default function PostContents({ ...rest }: Props) {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [postData, setPostData] = useState<readPostDto | null>(null);
  const [deleteBtn, setDeleteBtn] = useState(false);

  const getPostData = async () => {
    const data = await getPost(id);

    if (Array.isArray(data) && data.length > 0) {
      setPostData(data[0]);
    } else {
      setPostData(null);
    }
  };

  const checkUploader = async () => {
    const usernameAsync = await loadUsername();

    if (String(postData?.uploader) === usernameAsync) {
      setDeleteBtn(true);
    }
  };

  useFocusEffect(() => {
    getPostData();
    checkUploader();
  });
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.contentWrap}>
        <PostContentsHeader
          title={postData?.title}
          writer={postData?.uploader}
          datetime={postData?.created_at}
        />
        <PostContentsBody
          desc={postData?.desc}
          imgsrc={postData?.imgUri || tempValues.placeholderImg}
        />
      </View>
      {deleteBtn && (
        <View style={styles.deleteBtnWrap}>
          <StyledButton text="Delete Post" height={35} fitContent red />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: "center",
    paddingBottom: 30,
  },
  contentWrap: {
    flex: 1,
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 15,
    paddingLeft: 16,
  },
  deleteBtnWrap: {
    paddingRight: 16,
    paddingLeft: 16,
  },
});
