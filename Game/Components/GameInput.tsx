import React from "react";
import {
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Modal,
  Keyboard
} from "react-native";
import EStyleSheet, { value } from "react-native-extended-stylesheet";
import { Ionicons } from "@expo/vector-icons";

const entireScreenSize = Dimensions.get("window").width;
export interface InputProps {
  setguessNo: Function;
}

interface State {
  guessInput: string;
  showModal: boolean;
}

export class GameInput extends React.Component<InputProps, State> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      guessInput: "",
      showModal: false,
    };

    this.guessnoChangeText = this.guessnoChangeText.bind(this);
    this.guessnoHandler = this.guessnoHandler.bind(this);
  }

  guessnoChangeText = (enteredText: any) => {
    this.setState({
      guessInput: enteredText,
    });
  };

  guessnoHandler = () => {
    Keyboard.dismiss();
    if (Number(this.state.guessInput) > 0 && Number(this.state.guessInput)<100){
        this.props.setguessNo(this.state.guessInput);        
    }else {
        this.modalHandler();
    } 

  };

  modalHandler = () => {

      this.setState((prevState) => {
        return {
            showModal: !prevState.showModal,
        };
      }); 0
  };

  render() {
    return (
      <View style={styles.InputContainer}>
        <View style={styles.card}>
          <TextInput
            autoFocus={true}
            style={styles.textStyle}
            keyboardType="numeric"
            onChangeText={this.guessnoChangeText}
            value={this.state.guessInput}
          />
          <TouchableOpacity
            onPress={() => {
              this.guessnoHandler();
            }}
            activeOpacity={0.83}
          >
            <View style={styles.playStyle}>
              <Ionicons
                name="md-play-circle"
                size={styles.fontStyle.fontSize}
                color={styles.colorStyle.color}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Modal
          visible={this.state.showModal}
          animationType="slide"
          transparent={true}
          onRequestClose={this.modalHandler}
        >
          <View style={styles.ModalContainer}>
            <Text style={styles.ModalText}>Input must be a number</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $rem: entireScreenSize / 200,
  $textColor: "#0275d8",
  $iconColor: '#f39c12',
  $middle: entireScreenSize / 1.1,
  ModalText: {
    fontSize: "13rem",
    color: "red",
  },
  ModalContainer: {
    height: "40rem",
    marginHorizontal: "10rem",
    borderRadius: "5rem",
    marginTop: "$middle",
    justifyContent: "center",
    alignItems: "center",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
  },
  InputContainer: {
    paddingTop: "30rem",
    height: "100rem",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: "100rem",
    padding: "5rem",
    width: "140rem",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "5rem",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    elevation: 2,
    backgroundColor: "white",
  },
  textStyle: {
    fontSize: "20rem",
    width: "50rem",
    textAlign: "center",
    color: '$textColor'
  },
  playStyle: {
    width: "50rem",
    height: "30rem",
    borderRadius: "2rem",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  fontStyle: {
    fontSize: "28rem",
  },
  colorStyle: {
    color: "$iconColor",
  },
});
