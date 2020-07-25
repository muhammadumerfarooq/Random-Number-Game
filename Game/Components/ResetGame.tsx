import React from "react";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Ionicons } from "@expo/vector-icons";

const entireScreenSize = Dimensions.get("window").width;

type Props = {
  resetGame: boolean;
  title: string;
  setGame: Function;
};

export const ResetGame = ({ resetGame, title, setGame }: Props) => {
  const startGame = () => {
    setGame();
  };

  return (
    <View style={styles.resetContainer}>
      <Text style={styles.TextSize}>{title}</Text>
      <TouchableOpacity onPress={()=>{startGame()}}>
        {resetGame ? (
          <Ionicons
            name="md-play"
            size={styles.$iconSize}
            color={styles.$textColor}
          />
        ) : (
          <Ionicons
            name="md-refresh"
            size={styles.$iconSize}
            color={styles.$textColor}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  $rem: entireScreenSize / 200,
  $textColor: "#0275d8",
  $iconSize: "24rem",
  $centerPadding: entireScreenSize / 3,
  resetContainer: {
    marginTop: "$centerPadding",
    height: "80rem",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: "20rem",

    borderRadius: "5rem",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
  },
  TextSize: {
    fontSize: "22rem",
  },
});
