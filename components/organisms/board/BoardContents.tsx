import BoardContentsPost from "@/components/molecules/board/BoardContentsPost";
import { getAllPosts, postDataDto } from "@/hooks/apiRequest";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export interface Props {}

export default function BoardContents({ ...rest }: Props) {
  const [postData, setPostData] = useState<postDataDto[] | void>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllPosts();
      setPostData(data);
    })();
  }, []);

  return (
    <FlatList
      style={styles.postListWrap}
      data={postData!}
      renderItem={({ item }: { item: postDataDto }) => (
        <BoardContentsPost
          id={item.id}
          imgsrc={
            "https://dlfqevhpjinkmluhnxfv.supabase.co/storage/v1/object/public/post_images/placeholder.jpg"
          }
          title={item.title}
          desc={item.desc}
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
