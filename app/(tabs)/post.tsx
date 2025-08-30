import Gnb from "@/components/organisms/gnb/Gnb";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getPost, postDataDto } from "@/hooks/apiRequest";
import PostContentsHeader from "@/components/molecules/post/PostContentsHeader";
import { colors } from "@/hooks/colorScheme";
import PostContentsBody from "@/components/molecules/post/PostContentsBody";
import PostContents from "@/components/organisms/post/PostContents";

export interface Props {}

export default function Post({ ...rest }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Gnb />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <PostContents />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.bgGray,
  },
});
