// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at

// First things first, generate a grid?
// be able to track every part of the board

// make array that every index contains a  grid box

import { playerGrid } from "./boardSetup";
import { gridObject } from "./types";
export let boardArray = generateBoardArray();

export function gameBoard(gridArray: Array<gridObject>) {
  function updateGameBoard() {
    gridArray.forEach((element) => {
      if (element.occupied === true) {
        let boardSection =
          playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];
        boardSection.classList.add("bg-black");
      }
    });
  }

  function placeShip(x: number, y: number, length: number) {
    for (let i = 0; i < length; i++) {
      gridArray[parseInt(`${y}${x}`)].occupied = true;
      x++;
    }
  }

  placeShip(6, 5, 4);
  placeShip(4, 2, 3);
  updateGameBoard();
}

// 0-9 for x, when x reaches 9 iterate y by 1

export function generateBoardArray() {
  let boardArray: gridObject[] = [];
  let x = 0;
  let y = 0;

  for (let i = 1; i <= 100; i++) {
    if (x === 10) {
      x = 0;
      y++;
    }
    boardArray.push({ xCord: x, yCord: y, occupied: false });
    x++;
  }
  return boardArray;
}

// if i + j is occupied then invalid

export function ghostShip(shipLength: number, gridArray: Array<gridObject>) {
  for (let i = 0; i <= gridArray.length - 1; i++) {
    for (let j = 0; j < shipLength; j++) {
      if (gridArray[i + j]) {
        if (gridArray[i + j].occupied === true) {
          playerGrid.children[i].classList.add("cursor-not-allowed");
        }
      }
    }
    if (
      shipLength + gridArray[i].xCord >= 11 ||
      gridArray[i].occupied === true
    ) {
      playerGrid.children[i].classList.add("cursor-not-allowed");
    } else if (
      !playerGrid.children[i].classList.contains("cursor-not-allowed")
    ) {
      playerGrid.children[i].addEventListener("mouseover", () => {
        for (let j = 0; j < shipLength; j++) {
          playerGrid.children[i + j].classList.add("bg-neutral-600");
        }
      });
    }

    playerGrid.children[i].addEventListener("mouseleave", () => {
      for (let j = 0; j < shipLength; j++) {
        if (playerGrid.children[i + j]) {
          playerGrid.children[i + j].classList.remove("bg-neutral-600");
        } else {
          playerGrid.children[i].classList.remove("bg-neutral-600");
        }
      }
    });
  }
}

export function getMouseCord() {
  for (let i = 0; i < playerGrid.children.length; i++) {
    playerGrid.children[i].addEventListener("mousedown", () => {
      if (playerGrid.children[i].classList.contains("cursor-not-allowed"))
        console.log("you dingus");
      else {
        console.log(
          playerGrid.children[i].classList[0],
          playerGrid.children[i].classList[1]
        );
      }
    });
  }
}
