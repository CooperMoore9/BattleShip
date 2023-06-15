// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at

// First things first, generate a grid?
// be able to track every part of the board

// make array that every index contains a  grid box

import { playerGrid } from "./boardSetup";
import { gridObject } from "./types";

export function gameBoard() {}

// 0-9 for x, when x reaches 9 iterate y by 1

export function generateBoardArray() {
  let boardArray: gridObject[] = [];
  let x = 0;
  let y = 0;

  for (let i = 1; i < 100; i++) {
    if (x === 10) {
      x = 0;
      y++;
    }
    boardArray.push({ xCord: x, yCord: y, occupied: false });
    x++;
  }
  return boardArray;
}

function getCordOfMouse() {
  for (let i = 0; i < playerGrid.children.length; i++) {
    playerGrid.children[i].addEventListener("mousedown", () => {
      console.log(
        playerGrid.children[i].classList[0],
        playerGrid.children[i].classList[1]
      );
    });
  }
}

getCordOfMouse();
console.log(generateBoardArray());
