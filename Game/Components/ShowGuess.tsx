import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import EStyleSheet, { value } from "react-native-extended-stylesheet";

type InputProps = {
  historyList: [];
};

const entireScreenSize = Dimensions.get("window").width;

export const ShowGuess = ({ historyList }: InputProps) => {
  const renderItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.ItemView}>
        <View style={styles.listView}>
          <View style={styles.title}>
            <Text style={styles.titleSize}>{item.item.lowernum}</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleSize}>{item.item.highernum}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.Contaner}>
      <ScrollView scrollEnabled={true}>
        <FlatList
          data={historyList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  $rem: entireScreenSize / 200,
  $textColor: "#0275d8",
  $iconColor: "#f5f6fa",
  $middle: entireScreenSize / 1.1,
  Contaner: {
    margin: "5rem",
    flex: 1,
  },
  ItemView: {
    padding: "5rem",
    backgroundColor: "$iconColor",
    marginHorizontal: "7rem",
    marginVertical: "2rem",
    borderRadius: "5rem",
  },
  listView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    backgroundColor: "$textColor",
    borderRadius: "25rem",
    width: "30rem",
    height: "30rem",
    borderWidth: 1,
    borderColor: "#ced6e0",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  titleSize: {
    fontSize: "10rem",
  }
});
