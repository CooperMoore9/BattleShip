import { boardArray } from ".";
import { gameBoard, updateGameBoard } from "./gameBoardLogic";
import { ghostShip } from "./ghostShip";

const rotateButton = document.getElementById("rotateButton") as HTMLElement;
export let vertNum = 10;

rotateButton.addEventListener("click", () => {
  if (vertNum === 1) {
    vertNum = 10;
  } else {
    vertNum = 1;
  }
  updateGameBoard(boardArray);
  console.log(length);
});
