// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at

// First things first, generate a grid?
// be able to track every part of the board

// make array that every index contains a  grid box

// IDEA IDEA// IDEA IDEA// IDEA IDEA// IDEA IDEA// IDEA IDEA
// for when the bot is randomly choosing from the playerGrid when attacking,
// have it choose a random element in the array, when it does remove the element from the array,
// and update the array accordingly if it hit or not, the subtract from ship hit points

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

export let vertNum = 10;

const rotateButton = document.getElementById("rotateButton") as HTMLElement;
let shipArray: Ship[] = [];
let shipCounter = 0;

export function gameBoard(gridArray: Array<gridObject>) {
  let length = 5;

  function placeShip(length: number) {
    for (let i = 0; i < playerGrid.children.length; i++) {
      playerGrid.children[i].addEventListener("mousedown", () => {
        let x = parseInt(playerGrid.children[i].classList[0].charAt(1));
        let y = parseInt(playerGrid.children[i].classList[1].charAt(1));
        if (!playerGrid.children[i].classList.contains("cursor-not-allowed")) {
          if (x + length <= 10) {
            shipCounter++;
            placeShipInArray(x, y, length);
            updateGameBoard(gridArray);

            let tempShip = createShip(length, length, false);
            shipArray.push(tempShip);

            if (shipCounter === 3) {
              length++;
            }

            if (length > 2) {
              length--;
              ghostShip(length, gridArray);
              placeShip(length);
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

  rotateButton.addEventListener("click", () => {
    if (vertNum === 1) {
      vertNum = 10;
    } else {
      vertNum = 1;
    }
  });

  ghostShip(length, gridArray);
  placeShip(length);
}

export function updateGameBoard(gridArray: Array<gridObject>) {
  clearGrid();
  makeGrid(10, playerGrid);
  gridArray.forEach((element) => {
    if (element.occupied === true) {
      let boardSection =
        playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];
      boardSection.classList.add("bg-black");
    }
  });
}
