import { boardArray, botArray } from ".";
import { botGrid, makeBotGrid, playerGrid } from "./boardSetup";
import { updateGameBoard } from "./gameBoardLogic";
import { gridObject } from "./types";

let hitPoints = 17;
let botShipLength = 5;
let vertNum = getRandomInt(2);

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function placeBotShips() {
  for (let i = 0; i < 4; i++) {
    vertNum = getRandomInt(2);
    let randomNum = getRandomInt(acceptableBotPlacement(botArray).length);
    let placement = getActualPlacement(randomNum);
    if (botShipLength >= 2)
      // if (botShipLength === 3) {
      //   let randomNum = getRandomInt(acceptableBotPlacement(botArray).length);
      //   let placement = getActualPlacement(randomNum);
      //   for (let i = 0; i < botShipLength; i++) {
      //     if (vertNum === 0) {
      //       botArray[placement].occupied = true;
      //       placement++;
      //     } else {
      //       botArray[placement].occupied = true;
      //       placement += 10;
      //     }
      //   }
      // }
      for (let i = 0; i < botShipLength; i++) {
        if (vertNum === 0) {
          botArray[placement].occupied = true;
          placement++;
        } else {
          botArray[placement].occupied = true;
          placement += 10;
        }
      }
    botShipLength--;
  }
}

function getActualPlacement(rng: number): number {
  let botPlacementArr = acceptableBotPlacement(botArray);
  for (let i: number = 0; i < botArray.length; i++) {
    if (
      botArray[i].xCord === botPlacementArr[rng].xCord &&
      botArray[i].yCord === botPlacementArr[rng].yCord
    ) {
      return i;
    }
  }
  return 0;
}

function acceptableBotPlacement(gridArray: Array<gridObject>) {
  let acceptablePlacementArr: gridObject[] = [];
  for (let i = 0; i < gridArray.length; i++) {
    if (vertNum === 0) {
      for (let j = 1; j < botShipLength; j++) {
        if (
          gridArray[i + botShipLength] &&
          gridArray[i].xCord + botShipLength <= 10 &&
          gridArray[i].occupied === false &&
          gridArray[i + botShipLength].occupied === false &&
          gridArray[i + j].occupied === false
        ) {
          acceptablePlacementArr.push(gridArray[i]);
        }
      }
    } else if (vertNum === 1) {
      for (let j = 1; j < botShipLength; j++) {
        if (
          gridArray[i + botShipLength * 10] &&
          gridArray[i].yCord + botShipLength <= 10 &&
          gridArray[i].occupied === false &&
          gridArray[i + botShipLength * 10].occupied === false &&
          gridArray[i + j * 10].occupied === false
        ) {
          acceptablePlacementArr.push(gridArray[i]);
        }
      }
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
    if (hitPoints === 0) {
      console.log("loser");
    }
  } else {
    acceptableShots(boardArray)[rng].splash = true;
  }
  updateGameBoard(boardArray, playerGrid);
  playerShot();
}

export function playerShot() {
  makeBotGrid();
  updateGameBoard(botArray, botGrid);
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
