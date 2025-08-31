import BoardContentsPost from "@/components/molecules/board/BoardContentsPost";
import { getAllPosts, readPostDto } from "@/hooks/apiRequest";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export interface Props {}

export default function BoardContents({ ...rest }: Props) {
  const [postData, setPostData] = useState<readPostDto[] | void>([]);

  useFocusEffect(() => {
    (async () => {
      const data = await getAllPosts();
      setPostData(data);
    })();
  });

  return (
    <FlatList
      style={styles.postListWrap}
      data={postData!}
      renderItem={({ item }: { item: readPostDto }) => (
        <BoardContentsPost
          id={item.id}
          imgsrc={
            "https://dlfqevhpjinkmluhnxfv.supabase.co/storage/v1/object/public/post_images/placeholder.jpg"
          }
          title={item.title}
          desc={
            item.desc.length > 50 ? item.desc.slice(0, 50) + "..." : item.desc
          }
        />
      )}
    ></FlatList>
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
