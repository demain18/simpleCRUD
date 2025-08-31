import { colors } from "@/hooks/colorScheme";
import { StyleSheet, Text, View } from "react-native";

export interface Props {
  text: string;
}

export default function PostCommentsBox({ text, ...rest }: Props) {
  return (
    <View style={styles.mainWrap}>
      <Text style={styles.textStyled}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrap: {
    backgroundColor: colors.bgGray,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  textStyled: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 16,
  },
});
