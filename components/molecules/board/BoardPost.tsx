import { colors } from "@/hooks/colorScheme";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export interface Props {
  imgsrc?: string;
  title?: string;
  desc?: string;
}

export default function BoardPost({ imgsrc, title, desc, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.postStyled}>
      <View style={styles.postContentWrap}>
        <Image style={styles.imgStyled} source={{ uri: imgsrc || "" }}></Image>
        <View style={styles.contentWrap}>
          <Text style={styles.contentTitle}>{title}</Text>
          <Text style={styles.contentDesc}>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postStyled: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
    boxSizing: "border-box",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOpacity: 1,
    marginBottom: 16,
  },
  postContentWrap: {
    flex: 1,
    flexDirection: "row",
  },
  imgStyled: {
    width: 76,
    height: "100%",
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  contentWrap: {
    flex: 1,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  contentTitle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Poppins",
    lineHeight: 24,
    fontWeight: 700,
  },
  contentDesc: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Poppins",
    lineHeight: 24,
  },
});
