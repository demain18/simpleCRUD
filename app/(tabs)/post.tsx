import Gnb from "@/components/organisms/gnb/Gnb";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getPost, postDataDto } from "@/hooks/apiRequest";
import PostHeader from "@/components/molecules/post/PostHeader";
import { colors } from "@/hooks/colorScheme";

export interface Props {}

export default function Post({ ...rest }: Props) {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [postData, setPostData] = useState<postDataDto | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getPost(id);
      //   console.log(data);

      if (Array.isArray(data) && data.length > 0) {
        setPostData(data[0]);
      } else {
        setPostData(null);
      }

      console.log(postData);
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Gnb />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.contentWrap}>
          <PostHeader
            title={postData?.title}
            writer={postData?.uploader}
            datetime={postData?.created_at}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postWrap: {
    flex: 1,
    backgroundColor: colors.bgGray,
  },
  scrollView: {
    flex: 1,
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
