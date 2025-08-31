import BoardContentsPost from "@/components/molecules/board/BoardContentsPost";
import { getAllPosts, readPostDto } from "@/hooks/apiRequest";
import { tempValues } from "@/hooks/colorScheme";
import { removeLinebreaks } from "@/hooks/customHooks";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

export interface Props {}

export default function BoardContents({ ...rest }: Props) {
  const [postData, setPostData] = useState<readPostDto[] | void>([]);

  const getBoardPosts = async () => {
    const data = await getAllPosts();
    setPostData(data);
  };

  useFocusEffect(
    useCallback(() => {
      getBoardPosts();
    }, [])
  );

  return (
    <FlatList
      style={styles.postListWrap}
      data={postData!}
      renderItem={({ item }: { item: readPostDto }) => (
        <BoardContentsPost
          id={item.id}
          imgsrc={item.imgUri || tempValues.placeholderImg}
          title={item.title}
          desc={
            item.desc.length > 50
              ? removeLinebreaks(item.desc.slice(0, 50)) + "..."
              : removeLinebreaks(item.desc)
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
