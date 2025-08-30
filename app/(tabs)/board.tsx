import BoardContentsPost from "@/components/molecules/board/BoardContentsPost";
import BoardWrite from "@/components/molecules/board/BoardWrite";
import BoardContents from "@/components/organisms/board/BoardContents";
import Gnb from "@/components/organisms/gnb/Gnb";
import { getAllPosts, postDataDto } from "@/hooks/apiRequest";
import { colors } from "@/hooks/colorScheme";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export interface Props {}

export default function Board({ ...rest }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, backgroundColor: colors.bgGray }}>
        <Gnb />
        <BoardWrite />
        <BoardContents />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
