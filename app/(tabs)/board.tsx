import BoardPost from "@/components/molecules/board/BoardPost";
import BoardWrite from "@/components/organisms/board/BoardWrite";
import Gnb from "@/components/organisms/gnb/Gnb";
import { getAllPosts } from "@/hooks/apiRequest";
import { colors } from "@/hooks/colorScheme";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export interface Props {}

export interface postDataDto {
  uploader: string;
  title: string;
  desc: string;
}

export default function Board({ ...rest }: Props) {
  const [postData, setPostData] = useState<postDataDto[] | void>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllPosts();
      setPostData(data);
      console.log(postData);
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
              imgsrc={
                "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
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
