import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";

const initialState = {
  diceFaces: [],
  winCount: 0,
  totalPlay: 0,
  playerChoose: null,
};
const dices = [
  { img: image1, id: 1, value: 1 },
  { img: image2, id: 2, value: 2 },
  { img: image3, id: 3, value: 3 },
  { img: image4, id: 4, value: 4 },
  { img: image5, id: 5, value: 5 },
  { img: image6, id: 6, value: 6 },
];

const diceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER_CHOOSE":
      return { ...state, playerChoose: action.choose };
    case "PLAY_GAME":
      let randomDices = [];
      let diceSum = 0;
      if (!state.playerChoose) {
        alert("Vui lòng chọn tài hoặc xỉu");
      } else {
        const findArray = [];
        for (let i = 0; i < 3; i++) {
          let index = Math.floor(Math.random() * 6 + 1);
          diceSum = diceSum + index;
          randomDices.push(index);
          findArray.push(dices[index - 1]);
        }

        const totalPlay = (state.totalPlay += 1);
        let winCount = 0;
        if (state.playerChoose == 1 && diceSum >= 9) {
          winCount = state.winCount + 1;
          alert("Kết quả: Tài, Bạn đã Thắng!!");
        } else if (state.playerChoose == 2 && diceSum <= 8) {
          winCount = state.winCount + 1;
          alert("Kết quả: Xỉu, Chúc mừng Bạn đã Thắng!!");
        } else {
          winCount = state.winCount;
          alert("Bạn đã thua!!!");
        }
        return { ...state, diceFaces: findArray, totalPlay, winCount };
      }

    default:
      return state;
  }
};

export default diceReducer;
