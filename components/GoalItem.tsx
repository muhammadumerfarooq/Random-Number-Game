import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";

type ItemProps = {
  title: string;
  deleteGoalItem: Function;
  id: number;
};

export const GoalItem = ({ title, deleteGoalItem, id }: ItemProps) => {
  return (
    <TouchableWithoutFeedback 
      onPress={() => {
        deleteGoalItem(id);
      }}
    >
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderColor: "black",
  },
});
