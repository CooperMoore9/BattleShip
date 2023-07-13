import { boardArray, botArray } from ".";
import {
  botGrid,
  clearGrid,
  makeBotGrid,
  makeGrid,
  playerGrid,
} from "./boardSetup";
import { shipArray, updateGameBoard } from "./gameBoardLogic";
import { gridObject } from "./types";

let hitPoints = 17;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function placeBotShips(placementArr: gridObject[], botLength: number) {
  let randomNum = getRandomInt(placementArr.length);
  for (let i = 0; i < botLength; i++) {
    botArray[randomNum].occupied = true;
    randomNum++;
  }
}

function acceptableBotPlacement(
  gridArray: Array<gridObject>,
  botLength: number
) {
  let acceptablePlacementArr: gridObject[] = [];
  for (let i = 0; i < gridArray.length; i++) {
    if (gridArray[i].occupied === false) {
      acceptablePlacementArr.push(gridArray[i]);
    }
  }
  return acceptablePlacementArr;
}

export function acceptableShots(gridArray: Array<gridObject>) {
  let acceptableShotArr: gridObject[] = [];
  for (let i = 0; i < gridArray.length; i++) {
    if (gridArray[i].hit === false && gridArray[i].splash === false) {
      acceptableShotArr.push(gridArray[i]);
    }
  }
  return acceptableShotArr;
}

function botShot() {
  let rng = getRandomInt(acceptableShots(boardArray).length);

  if (acceptableShots(boardArray)[rng].occupied === true) {
    let shotPlacement = acceptableShots(boardArray)[rng];
    shotPlacement.hit = true;
    hitPoints--;
    console.log(hitPoints);
    if (hitPoints === 0) {
      console.log("loser");
    }
  } else {
    acceptableShots(boardArray)[rng].splash = true;
  }
  updateGameBoard(boardArray);
  makeBotGrid();
  playerShot();
}

export function playerShot() {
  for (let i = 0; i < botGrid.children.length; i++) {
    botGrid.children[i].classList.add("cursor-pointer");
    let x = parseInt(botGrid.children[i].classList[0].charAt(1));
    let y = parseInt(botGrid.children[i].classList[1].charAt(1));
    botGrid.children[i].addEventListener("mousedown", () => {
      if (hitPoints > 0) {
        botShot();
      }
    });
  }
}

// remove occupied spaces from grid
// have different function, not ghost ship, or maybe modified version to make a grid
// to decide if
// choose random number 1-100
// random if vertical or not

// 1. need function that generate the array of available spaces
//  1.1 choose if vertical or horizontal
// 2. choose randomly from that array.
// 3. make ship in space
// 4. repeat
// 5. when all are placed (which should happen instantly) make the bot grid clickable by player
// 6. when player clicks AI choose random player grid point.
