import BoardPost from "@/components/molecules/board/BoardPost";
import BoardWrite from "@/components/organisms/board/BoardWrite";
import Gnb from "@/components/organisms/gnb/Gnb";
import { getAllPosts, postDataDto } from "@/hooks/apiRequest";
import { colors } from "@/hooks/colorScheme";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export interface Props {}

export default function Board({ ...rest }: Props) {
  const [postData, setPostData] = useState<postDataDto[] | void>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllPosts();
      console.log(data);

      setPostData(data);
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, backgroundColor: colors.bgGray }}>
        <Gnb />
        <BoardWrite />
        <FlatList
          style={styles.postListWrap}
          data={postData!}
          renderItem={({ item }: { item: postDataDto }) => (
            <BoardPost
              id={item.id}
              imgsrc={
                "https://dlfqevhpjinkmluhnxfv.supabase.co/storage/v1/object/public/post_images/placeholder.jpg"
              }
              title={item.title}
              desc={item.desc}
            />
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postListWrap: {
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 24,
    paddingLeft: 16,
  },
});
