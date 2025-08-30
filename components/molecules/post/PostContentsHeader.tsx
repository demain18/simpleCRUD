import { colors } from "@/hooks/colorScheme";
import { Text, View, StyleSheet } from "react-native";

export interface Props {
  title?: string;
  writer?: string;
  datetime?: string;
}

export default function PostContentsHeader({
  title,
  writer,
  datetime,
  ...rest
}: Props) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.writer}>{writer}</Text>
      <Text style={styles.datetime}>{datetime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 8,
  },
  writer: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 20,
    marginBottom: 4,
  },
  datetime: {
    color: colors.black,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 16,
    marginBottom: 16,
  },
});
