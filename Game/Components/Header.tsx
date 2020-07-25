import React from "react";
import { View, Text, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 200});

type props = {
  title: string;
};
export const Header = ({ title }: props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({

    $textColor: '#9980FA',
    $width: '100%',
  headerContainer: {
    width: '$width',
    height: "60rem",
    backgroundColor: '$textColor',
    paddingTop: "7rem",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: "14rem",
    color: '#353b48',
    fontWeight: 'bold'
  },
});
