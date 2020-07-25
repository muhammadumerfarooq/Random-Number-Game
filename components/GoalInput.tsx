import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export interface InputProps {
  addGoalHandler: Function;
}

interface State {
  goalInput: string;
}

export class GoalInput extends React.Component<InputProps, State> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      goalInput: "",
    };

    this.goalTextChange = this.goalTextChange.bind(this);
    this.goalAdded = this.goalAdded.bind(this);
  }
  goalAdded = () => {
    this.props.addGoalHandler(this.state.goalInput);
  };

  goalTextChange = (textentered: string) => {
    this.setState({ goalInput: textentered });
  };

  render() {
    return (
      <Modal visible={true} animationType={"slide"} transparent ={true}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={this.goalTextChange}
            value={this.state.goalInput}
          />
          <Button title="ADD" onPress={this.goalAdded} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    // flex: 0.4,
    backgroundColor: "black",
  },
  inputContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 100,
    backgroundColor: '#fff',
    
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 2,
    padding: 10,
  },
});
