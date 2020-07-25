import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { MainScreen } from "./Game/Components/MainScreen";

export default function App() {
  /*  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalsList, setgoalsList] = useState([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = (enteredText: string) => {
    addlistHandler(enteredText);
  };

  const deleteGoalItem = (index: number) => {
    goalsList.splice(index, 1);
    setgoalsList([...goalsList]);
  }

  const addlistHandler = (enteredText: string) => {
    setgoalsList((prevList) => {
      return [
        ...prevList,
        { key: Math.random().toString(), value: enteredText },
      ];
    });
  }; */

  return (
    <MainScreen />
    /*     <View style={styles.screen}>
      <Text>text Input here </Text>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, _index) => item.key}
        data={goalsList}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} id = {itemData.index} deleteGoalItem = {deleteGoalItem}/>}
      />
    </View> */
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
