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

  // placeShip(6, 5, 4);
  // placeShip(3, 2, 3);
  // updateGameBoard();
  // console.log(gridArray);
}

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

function ghostShip(shipLength: number, gridArray: Array<gridObject>) {
  for (let i = 0; i <= playerGrid.children.length; i++) {
    playerGrid.children[i].addEventListener("mouseover", () => {
      playerGrid.children[i].classList.add("bg-neutral-600");
      for (let j = 0; j < shipLength; j++) {
        if (shipLength + gridArray[i].xCord >= 11) {
          playerGrid.children[i].classList.add("cursor-not-allowed");
          console.log("bad");
        } else {
          playerGrid.children[i + j].classList.add("bg-neutral-600");
        }
      }
    });

    playerGrid.children[i].addEventListener("mouseleave", () => {
      playerGrid.children[i].classList.remove("bg-neutral-600");
      for (let j = 0; j < shipLength; j++) {
        playerGrid.children[i + j].classList.remove("bg-neutral-600");
      }
    });
  }
}

function getMouseCord() {
  for (let i = 0; i < playerGrid.children.length; i++) {
    playerGrid.children[i].addEventListener("mousedown", () => {
      console.log(
        playerGrid.children[i].classList[0],
        playerGrid.children[i].classList[1]
      );
    });
  }
}

ghostShip(4, boardArray);
getMouseCord();
console.log(parseInt(playerGrid.children[45].classList[0].slice(1)));
