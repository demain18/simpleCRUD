import { colors } from "@/hooks/colorScheme";
import { Text, View, StyleSheet, Image } from "react-native";

export interface Props {
  desc?: string;
  imgsrc?: string;
}

export default function PostContentsBody({ desc, imgsrc, ...rest }: Props) {
  return (
    <View style={styles.containerStyled}>
      <Text style={styles.descStyled}>{desc}</Text>
      <Image
        style={styles.imgStyled}
        source={{
          uri: imgsrc || "",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyled: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOpacity: 1,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  descStyled: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 24,
  },
  imgStyled: {
    width: "100%",
    height: 188,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    marginTop: 16,
  },
});
