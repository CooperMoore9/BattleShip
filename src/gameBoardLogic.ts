// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at

import { gridObject } from "./types";

// First things first, generate a grid?
// be able to track every part of the board

// make array that every index contains a  grid box
let playerGrid = document.querySelectorAll(".box");
let xCord = 0;
let yCord = 0;

XCordListener();
yCordListener();

function XCordListener() {
  playerGrid.forEach((box) => {
    box.addEventListener("mousedown", () => {
      xCord = parseInt(box.className.slice(1, 2).trim());
    });
  });
  return xCord;
}

function yCordListener() {
  playerGrid.forEach((box) => {
    box.addEventListener("mousedown", () => {
      yCord = parseInt(box.className.slice(4, 5).trim());
      console.log("x", xCord, "y", yCord);
    });
  });
  return yCord;
}

export function gameBoard() {}

// 0-9 for x, when x reaches 9 iterate y by 1

function generateBoardArray() {
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
  console.log(boardArray);
}

console.log(generateBoardArray());
