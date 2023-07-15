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

import { boardArray, botArray } from ".";
import {
  botGrid,
  clearGrid,
  makeBotGrid,
  makeGrid,
  playerGrid,
} from "./boardSetup";
import { acceptableShots, placeBotShips, playerShot } from "./botLogic";
import { ghostShip } from "./ghostShip";
import { vertNum } from "./rotateShip";
import { createShip } from "./shipLogic";
import { Ship, gridObject } from "./types";

const rotateButton = document.getElementById("rotateButton") as HTMLElement;
export let shipArray: Ship[] = [];
let shipCounter = 0;
export let currentLength = 5;

export function gameBoard(gridArray: Array<gridObject>) {
  ghostShip(currentLength, gridArray);
  placeShip();

  function placeShip() {
    for (let i = 0; i < playerGrid.children.length; i++) {
      playerGrid.children[i].addEventListener("mousedown", () => {
        let x = parseInt(playerGrid.children[i].classList[0].charAt(1));
        let y = parseInt(playerGrid.children[i].classList[1].charAt(1));
        if (!playerGrid.children[i].classList.contains("cursor-not-allowed")) {
          if (vertNum === 1) {
            if (x + currentLength <= 10) {
              shipCounter++;
              placeShipInArray(x, y, currentLength);
              updateGameBoard(gridArray, playerGrid);

              let tempShip = createShip(
                x,
                y,
                currentLength,
                currentLength,
                false
              );
              shipArray.push(tempShip);

              currentLength--;

              if (shipCounter === 3) {
                currentLength++;
              }

              if (currentLength >= 2) {
                ghostShip(currentLength, gridArray);
                placeShip();
              } else {
                rotateButton.setAttribute("hidden", "true");
                acceptableShots(boardArray);
                makeBotGrid();
                placeBotShips();
                updateGameBoard(botArray, botGrid);
                playerShot();
              }
            }
          } else {
            if (y + currentLength <= 10) {
              shipCounter++;
              placeShipInArray(x, y, currentLength);
              updateGameBoard(gridArray, playerGrid);
              let tempShip = createShip(
                x,
                y,
                currentLength,
                currentLength,
                false
              );
              shipArray.push(tempShip);

              currentLength--;

              if (shipCounter === 3) {
                currentLength++;
              }

              if (currentLength >= 2) {
                ghostShip(currentLength, gridArray);
                placeShip();
              } else {
                rotateButton.setAttribute("hidden", "true");
                acceptableShots(boardArray);
                makeBotGrid();
                placeBotShips();
                playerShot();
              }
            }
          }
        }
      });
    }
  }

  function placeShipInArray(x: number, y: number, length: number) {
    for (let i = 0; i < length; i++) {
      gridArray[parseInt(`${y}${x}`)].occupied = true;
      if (vertNum === 1) {
        x++;
      } else {
        y++;
      }
    }
  }
}

export function updateGameBoard(
  gridArray: Array<gridObject>,
  grid: HTMLElement
) {
  clearGrid();
  makeGrid(10, grid);
  gridArray.forEach((element) => {
    let boardSection =
      grid.children[parseInt(`${element.yCord}${element.xCord}`)];
    if (element.occupied === true && element.hit === false) {
      boardSection.classList.add("bg-black");
    } else if (element.hit === true) {
      boardSection.classList.add("bg-[#991b1b]");
    }
    if (element.splash === true) {
      boardSection.classList.add("bg-[#60a5fa]");
    }
  });
}
