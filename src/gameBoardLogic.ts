// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at

// First things first, generate a grid?
// be able to track every part of the board

// make array that every index contains a  grid box

import {
  botGrid,
  clearGrid,
  makeBotGrid,
  makeGrid,
  playerGrid,
} from "./boardSetup";
import { ghostShip } from "./ghostShip";
import { createShip } from "./shipLogic";
import { Ship, gridObject } from "./types";
export let boardArray = generateBoardArray();

let shipCounter = 0;
export let shipArray: Ship[] = [];

export function gameBoard(gridArray: Array<gridObject>) {
  let length = 5;

  function updateGameBoard() {
    gridArray.forEach((element) => {
      if (element.occupied === true) {
        let boardSection =
          playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];
        boardSection.classList.add("bg-black");
      }
    });
  }

  function placeShipOnBoard(length: number) {
    for (let i = 0; i < playerGrid.children.length; i++) {
      playerGrid.children[i].addEventListener("mousedown", () => {
        let x = parseInt(playerGrid.children[i].classList[0].charAt(1));
        let y = parseInt(playerGrid.children[i].classList[1].charAt(1));
        if (!playerGrid.children[i].classList.contains("cursor-not-allowed")) {
          if (x + length <= 10) {
            shipCounter++;
            placeShipInArray(x, y, length);
            clearGrid();
            makeGrid(10, playerGrid);
            updateGameBoard();

            let tempShip = createShip(length, length, false);
            shipArray.push(tempShip);
            console.log(shipArray);

            if (shipCounter === 3) {
              length++;
            }

            if (length > 2) {
              length--;
              ghostShip(length, gridArray);
              placeShipOnBoard(length);
            } else {
              makeBotGrid();
            }
          }
        }
      });
    }
  }

  function placeShipInArray(x: number, y: number, length: number) {
    for (let i = 0; i < length; i++) {
      gridArray[parseInt(`${y}${x}`)].occupied = true;
      x++;
    }
  }

  ghostShip(length, gridArray);
  placeShipOnBoard(length);
}

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

export function getMouseCord() {
  for (let i = 0; i < playerGrid.children.length; i++) {
    playerGrid.children[i].addEventListener("mousedown", () => {
      if (playerGrid.children[i].classList.contains("cursor-not-allowed"))
        console.log("you dingus");
      else {
        let x = parseInt(playerGrid.children[i].classList[0].charAt(1));
        let y = parseInt(playerGrid.children[i].classList[1].charAt(1));
        console.log(x, y);
        return parseInt(`${y}${x}`);
      }
    });
  }
}
