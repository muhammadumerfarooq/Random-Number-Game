import React from "react";
import { View, Dimensions, Text, Button, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Ionicons } from "@expo/vector-icons";

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 200 });

export interface InputProps {
  enteredNo: string;
  lowNo: string;
  highNo: string;
  setlowNo: Function;
  sethighNo: Function;
  restartGame: Function;
}

interface State {
  guessedNo: string;
  gameOver: boolean;
}

export class PlayGame extends React.Component<InputProps, State> {
  max = Number(this.props.highNo);
  min = Number(this.props.lowNo);

  //  (max - min + 1)) + min;
  constructor(props: InputProps) {
    super(props);

    this.state = {
      guessedNo: Math.floor(
        Math.random() * (this.max - this.min + 1) + this.min
      ).toString(),
      gameOver: false,
    };

    if (this.state.guessedNo != "") {
      if (this.props.enteredNo < this.state.guessedNo) {
        this.props.sethighNo(this.state.guessedNo);
      } else {
        this.props.setlowNo(this.state.guessedNo);
      }
    }
  }

  getGussedNo = () => {
    const random = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    ).toString();
    if (random != this.state.guessedNo) {
      return random;
    } else {
      return Math.floor(
        Math.random() * (this.max - this.min + 1) + this.min
      ).toString();
    }
  };
  lowGuess = () => {
    if (Number(this.state.guessedNo) > Number(this.props.enteredNo)) {
      //   console.log("  this.max ", this.max, " this.min ", this.min);
      this.setState(
        {
          guessedNo: this.getGussedNo(),
        },
        () => {
          console.log(" after setting ", this.state.guessedNo);
          if (Number(this.props.enteredNo) < Number(this.state.guessedNo)) {
            this.props.sethighNo(this.state.guessedNo);
          } else {
            this.props.setlowNo(this.state.guessedNo);
          }
        }
      );
    }
  };

  highGuess = () => {
    if (Number(this.state.guessedNo) < Number(this.props.enteredNo)) {
      //   console.log("  this.max ", this.max, " this.min ", this.min);

      this.setState(
        {
            guessedNo: this.getGussedNo(),
        },
        () => {
          console.log(" after setting ", this.state.guessedNo);

          if (Number(this.props.enteredNo) < Number(this.state.guessedNo)) {
            this.props.sethighNo(this.state.guessedNo);
          } else {
            this.props.setlowNo(this.state.guessedNo);
          }
        }
      );
    }
  };

  foundNo = () => {
/*     this.setState({
      gameOver: true,
    }); */
  };
  render() {
    this.max = Number(this.props.highNo);
    this.min = Number(this.props.lowNo);

    if (this.props.enteredNo === this.state.guessedNo) {
      this.foundNo();
    }

    return (
      <View style={styles.GameContainer}>
        <View style={styles.Container}>
          <Text style={styles.textStyle}>{this.state.guessedNo}</Text>
          <View style={styles.playButtons}>
            {Number(this.state.guessedNo) > Number(this.props.enteredNo) ? (
              <TouchableOpacity onPress={this.lowGuess}>
                <Ionicons
                  name="md-arrow-round-back"
                  size={styles.$iconSize}
                  color={styles.$textColor}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => {}} disabled={false}>
                <Ionicons
                  name="md-arrow-round-back"
                  size={styles.$iconSize}
                  color={styles.$invisiblecolor}
                />
              </TouchableOpacity>
            )}

            {/*             {this.state.gameOver ? (
              <TouchableOpacity
                onPress={() => {
                  this.props.restartGame();
                }}
              >
                <Ionicons
                  name="md-refresh-round"
                  size={styles.$iconSize}
                  color={styles.$textColor}
                />
              </TouchableOpacity>
            ) : null} */}

            {Number(this.state.guessedNo) < Number(this.props.enteredNo) ? (
              <TouchableOpacity onPress={this.highGuess}>
                <Ionicons
                  name="md-arrow-round-forward"
                  size={styles.$iconSize}
                  color={styles.$textColor}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => {}} disabled={false}>
                <Ionicons
                  name="md-arrow-round-forward"
                  size={styles.$iconSize}
                  color={styles.$invisiblecolor}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $rem: entireScreenWidth / 200,
  $paddingTop: entireScreenWidth / 17,
  $iconSize: "30rem",
  $textColor: "#F79F1F",
  $invisiblecolor: "#f5f6fa",

  GameContainer: {},
  playButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Container: {
    justifyContent: "space-around",
    height: "100rem",
    marginTop: "$paddingTop",
    // paddingTop: '20rem',
    marginHorizontal: "10rem",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: "5rem",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textStyle: {
    fontSize: "28rem",
    textAlign: "center",
    color: "#9980FA",
    fontWeight: "700",
  },
});
