import React from "react";
import { Dimensions, View } from "react-native";
import { Header } from "./Header";
import EStyleSheet from "react-native-extended-stylesheet";
import { GameInput } from "./GameInput";
import { ResetGame } from "./ResetGame";
import { PlayGame } from "./PlayGame";
import { ShowGuess } from "./ShowGuess";

const entireScreenSize = Dimensions.get("window").width;

export interface InputProps {}

interface list {
  id: number;
  guess: string;
}

interface State {
  resetGame: boolean;
  gametitle: string;
  gameStarted: boolean;
  guessNo: string;
  lowerNum: string;
  higherNum: string;
  historyList: [];
}

export class MainScreen extends React.Component<InputProps, State> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      resetGame: true,
      gametitle: "Play Game",
      gameStarted: false,
      guessNo: "",
      lowerNum: "1",
      higherNum: "100",
      historyList: [],
    };

    this.setlowerNum = this.setlowerNum.bind(this);
    this.sethigherNum = this.sethigherNum.bind(this);
    this.gameStartedHandler = this.gameStartedHandler.bind(this);
    this.resetgameTitle = this.resetgameTitle.bind(this);
    this.setguessNo = this.setguessNo.bind(this);
    this.resetgameHandler = this.resetgameHandler.bind(this);
  }

  gameStartedHandler = () => {
    this.setState((prevState) => {
      return {
        gameStarted: !prevState.gameStarted,
      };
    });
  };

  resetgameHandler = () => {
    this.setState((prevState) => {
      return {
        resetGame: !prevState.resetGame,
      };
    });

    this.state.resetGame
      ? this.resetgameTitle("Play Game")
      : this.resetgameTitle("Play Again");
  };

  setguessNo = (guessText: string) => {
    this.setState({
      guessNo: guessText,
      gameStarted: false
    });
  };

  resetgameTitle = (textMsg: string) => {
    this.setState({
      gametitle: textMsg,
    });
  };

  setlowerNum = (No: string) => {
    this.setState(
      {
        lowerNum: No,
      },
      () => {
        this.addhistoryList();
      }
    );
  };

  sethigherNum = (No: string) => {
    this.setState(
      {
        higherNum: No,
      },
      () => {
        this.addhistoryList();
      }
    );
  };

  restartGame = () => {
    this.setState({
        resetGame: true,
        gametitle: "Play Game",
        gameStarted: true,
        guessNo: "",
        lowerNum: "1",
        higherNum: "100",
        historyList: [],
    })
  };

  addhistoryList = () => {
    const item = {
      id: Math.floor(Math.random() * 1000) + this.state.lowerNum,
      lowernum: this.state.lowerNum,
      highernum: this.state.higherNum,
    };

    this.setState((prevState) => {
      return {
        historyList: [...prevState.historyList, item],
      };
    });
  };

  render() {
    return (
      <View style={styles.screen}>
        <Header title="Guess Number" />
        {this.state.gameStarted ? (
          <GameInput setguessNo={this.setguessNo} />
        ) : this.state.guessNo != "" ? (
          <>
            <PlayGame
              restartGame={this.restartGame}
              enteredNo={this.state.guessNo}
              lowNo={this.state.lowerNum}
              highNo={this.state.higherNum}
              setlowNo={this.setlowerNum}
              sethighNo={this.sethigherNum}
            />
            <ShowGuess historyList={[...this.state.historyList]} />
          </>
        ) : (
          <ResetGame
            setGame={this.gameStartedHandler}
            title="Play Game"
            resetGame={true}
          />
        )}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
  },
});
