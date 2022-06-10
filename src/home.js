import React, { Component } from "react";
import home from "./home.css";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { playerChoose, playGame, diceFaces, choose, totalPlay, winCount } =
      this.props;
    const diceBig = document.getElementById("diceBig");
    const diceSmall = document.getElementById("diceSmall");
    const spanChoose = document.getElementById("chooseDice");

    switch (choose) {
      case 1:
        diceBig.classList.add("btn-boxShadow");
        diceSmall.classList.remove("btn-boxShadow");
        spanChoose.innerHTML = "Tài";
        break;
      case 2:
        diceSmall.classList.add("btn-boxShadow");
        diceBig.classList.remove("btn-boxShadow");
        spanChoose.innerHTML = "Xỉu";

        break;
      case -1:
        spanChoose.innerHTML = "...";

        alert("Vui lòng chọn Tài hoặc Xỉu");
        break;
      default:
        break;
    }
   
    return (
      <div className="container">
        <h1>GAME ĐỔ XÚC XẮC</h1>
        <div className="main">
          <div className="dice">
            <button
              id="diceBig"
              onClick={() => playerChoose(1)}
              className="diceBig"
            >
              TÀI
            </button>
            <div id="imgBody">
              {diceFaces.map((dice, index) => {
                return (
                  <img key={index} src={dice.img} height="60px" weight="60px" />
                );
              })}
            </div>
            <button
              id="diceSmall"
              onClick={() => playerChoose(2)}
              className="diceSmall"
            >
              XỈU
            </button>
          </div>
          <div className="info">
            <div className="choose">
              <span>BẠN CHỌN: </span>
              <span id="chooseDice" className="chooseDice">
                Tài
              </span>
            </div>
            <div className="countWin">
              <span>Số bàn thắng: </span>
              <span className="totaWinCount">{winCount}</span>
            </div>
            <div className="totalPlay">
              <span>Tổng số bàn chơi:</span>
              <span className="totalPlayCount">{totalPlay}</span>
            </div>
            <button id="btnPlay" onClick={() => playGame()}>
              Play Game
            </button>
            <p>Luật: tổng các mặt xúc xắc > 9 thì = Tài và ngược lại</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    diceFaces: state.dice.diceFaces,
    choose: state.dice.playerChoose,
    totalPlay: state.dice.totalPlay,
    winCount: state.dice.winCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playerChoose: (choose) => {
      const action = {
        type: "PLAYER_CHOOSE",
        choose,
      };
      dispatch(action);
    },
    playGame: () => {
      const action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
