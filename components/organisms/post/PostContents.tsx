import PostContentsBody from "@/components/molecules/post/PostContentsBody";
import PostContentsHeader from "@/components/molecules/post/PostContentsHeader";
import { getPost, postDataDto } from "@/hooks/apiRequest";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export interface Props {}

export default function PostContents({ ...rest }: Props) {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [postData, setPostData] = useState<postDataDto | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getPost(id);

      if (Array.isArray(data) && data.length > 0) {
        setPostData(data[0]);
      } else {
        setPostData(null);
      }

      // console.log(postData);
    })();
  }, []);
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
          imgsrc="https://dlfqevhpjinkmluhnxfv.supabase.co/storage/v1/object/public/post_images/placeholder.jpg"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: "center",
  },
  contentWrap: {
    flex: 1,
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 24,
    paddingLeft: 16,
  },
});
