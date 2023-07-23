import { boardArray, botArray } from ".";
import {
  botGrid,
  clearGrid,
  makeBotGrid,
  makeGrid,
  playerGrid,
} from "./boardSetup";
import { updateGameBoard } from "./gameBoardLogic";
import { gridObject } from "./types";

let hitPoints = 17;
let botHitPoints = 17;
let botShipLength = 5;
let vertNum = getRandomInt(2);

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function placeBotShips() {
  let placementArr = acceptableBotPlacement(botArray);
  for (let i = 0; i < botArray.length; i++) {
    for (let j = 0; j < placementArr.length; j++) {
      if (
        placementArr[j].xCord === botArray[i].xCord &&
        placementArr[j].yCord === botArray[i].yCord
      ) {
        botArray[i].occupied = true;
      }
    }
  }
  // for (let i = 0; i < 4; i++) {
  //   vertNum = getRandomInt(2);
  //   let randomNum = getRandomInt(acceptableBotPlacement(botArray).length);
  //   let placement = getActualPlacement(randomNum);
  //   if (botShipLength >= 2) {
  //     if (botShipLength === 3) {
  //       let randomNum = getRandomInt(acceptableBotPlacement(botArray).length);
  //       let placement = getActualPlacement(randomNum);
  //       for (let i = 0; i < botShipLength; i++) {
  //         if (vertNum === 0) {
  //           botArray[placement].occupied = true;
  //           placement++;
  //         } else {
  //           botArray[placement].occupied = true;
  //           placement += 10;
  //         }
  //       }
  //     }
  //   }
  //   for (let i = 0; i < botShipLength; i++) {
  //     if (vertNum === 0) {
  //       botArray[placement].occupied = true;
  //       placement++;
  //     } else {
  //       botArray[placement].occupied = true;
  //       placement += 10;
  //     }
  //   }
  //   botShipLength--;
  // }
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

function getRandomShipPlacementValue(): gridObject[] {
  let cordsArr: Array<gridObject> = [];
  if (vertNum === 0) {
    let randomPlaceHoriNum = getRandomInt(10);
    if (randomPlaceHoriNum + botShipLength > 10) {
      return getRandomShipPlacementValue();
    }
    let randomPlaceVertNum = getRandomInt(10);
    cordsArr.push(
      botArray[parseInt(`${randomPlaceVertNum}${randomPlaceHoriNum}`)]
    );

    for (let i = 1; i < botShipLength; i++) {
      cordsArr.push(
        botArray[parseInt(`${randomPlaceVertNum}${randomPlaceHoriNum + i}`)]
      );
    }
  } else {
    let randomPlaceVertNum = getRandomInt(10);
    if (randomPlaceVertNum + botShipLength > 10) {
      return getRandomShipPlacementValue();
    }
    let randomPlaceHoriNum = getRandomInt(10);
    cordsArr.push(
      botArray[parseInt(`${randomPlaceVertNum}${randomPlaceHoriNum}`)]
    );
    for (let i = 1; i < botShipLength; i++) {
      cordsArr.push(
        botArray[parseInt(`${randomPlaceVertNum + i}${randomPlaceHoriNum}`)]
      );
    }
  }
  console.log(vertNum);
  console.log(cordsArr);
  return cordsArr;
}

function acceptableBotPlacement(gridArray: Array<gridObject>): gridObject[] {
  const randomShipPlacement = getRandomShipPlacementValue();
  for (let i = 0; i < gridArray.length; i++) {
    for (let j = 0; j < randomShipPlacement.length; j++) {
      if (
        gridArray[i].xCord &&
        gridArray[i].yCord === randomShipPlacement[j].xCord &&
        randomShipPlacement[j].yCord
      ) {
        if (gridArray[i].occupied) {
          acceptableBotPlacement(gridArray);
        }
      }
    }
  }
  return randomShipPlacement;
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
      if (botArray[i].occupied === true && botArray[i].hit === false) {
        botArray[i].hit = true;
        botHitPoints--;
        updateGameBoard(botArray, botGrid);
        if (botHitPoints != 0 && hitPoints != 0) {
          botShot();
        } else {
          console.log("someone lost");
        }
      } else if (
        botArray[i].splash === false &&
        botArray[i].occupied === false
      ) {
        botArray[i].splash = true;
        updateGameBoard(botArray, botGrid);
        if (botHitPoints != 0 && hitPoints != 0) {
          botShot();
        } else {
          console.log("someone lost");
        }
      }
    });
  }
}

function updateBotBoard(gridArray: Array<gridObject>, grid: HTMLElement) {
  clearGrid(grid);
  makeGrid(10, grid);
  gridArray.forEach((element) => {
    let boardSection =
      grid.children[parseInt(`${element.yCord}${element.xCord}`)];
    if (element.hit === true) {
      boardSection.classList.add("bg-[#991b1b]");
    }
    if (element.splash === true) {
      boardSection.classList.add("bg-[#60a5fa]");
    }
  });
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
