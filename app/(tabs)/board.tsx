import { Text, View, StyleSheet } from "react-native";

export interface Props {}

export default function Board({ ...rest }: Props) {
  return (
    <View>
      <Text style={styles.boardText}>This is board</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boardText: {
    fontSize: 30,
    fontWeight: 500,
  },
});
