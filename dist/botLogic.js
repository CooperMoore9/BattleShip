"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerShot = exports.acceptableShots = void 0;
const _1 = require(".");
const boardSetup_1 = require("./boardSetup");
const gameBoardLogic_1 = require("./gameBoardLogic");
let hitPoints = 17;
let botShipLength = 5;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function placeBotShips(placementArr) {
    let randomNum = getRandomInt(placementArr.length);
    for (let i = 0; i < botShipLength; i++) {
        _1.botArray[randomNum].occupied = true;
        randomNum++;
    }
}
function acceptableBotPlacement(gridArray) {
    let acceptablePlacementArr = [];
    let vertNum = getRandomInt(2);
    console.log(vertNum);
    for (let i = 0; i < gridArray.length; i++) {
        if (vertNum === 0) {
            if (gridArray[i + botShipLength] &&
                gridArray[i].xCord + botShipLength <= 10 &&
                gridArray[i].occupied === false) {
                acceptablePlacementArr.push(gridArray[i]);
            }
        }
        else {
            if (gridArray[i + botShipLength * 10] &&
                gridArray[i].yCord + botShipLength <= 10 &&
                gridArray[i].occupied === false) {
                acceptablePlacementArr.push(gridArray[i]);
            }
        }
    }
    return acceptablePlacementArr;
}
function acceptableShots(gridArray) {
    let acceptableShotArr = [];
    for (let i = 0; i < gridArray.length; i++) {
        if (gridArray[i].hit === false && gridArray[i].splash === false) {
            acceptableShotArr.push(gridArray[i]);
        }
    }
    return acceptableShotArr;
}
exports.acceptableShots = acceptableShots;
function botShot() {
    let rng = getRandomInt(acceptableShots(_1.boardArray).length);
    if (acceptableShots(_1.boardArray)[rng].occupied === true) {
        let shotPlacement = acceptableShots(_1.boardArray)[rng];
        shotPlacement.hit = true;
        hitPoints--;
        if (hitPoints === 0) {
            console.log("loser");
        }
    }
    else {
        acceptableShots(_1.boardArray)[rng].splash = true;
    }
    (0, gameBoardLogic_1.updateGameBoard)(_1.boardArray, boardSetup_1.playerGrid);
    (0, boardSetup_1.makeBotGrid)();
    playerShot();
}
function playerShot() {
    for (let i = 0; i < boardSetup_1.botGrid.children.length; i++) {
        boardSetup_1.botGrid.children[i].classList.add("cursor-pointer");
        let x = parseInt(boardSetup_1.botGrid.children[i].classList[0].charAt(1));
        let y = parseInt(boardSetup_1.botGrid.children[i].classList[1].charAt(1));
        boardSetup_1.botGrid.children[i].addEventListener("mousedown", () => {
            placeBotShips(acceptableBotPlacement(_1.botArray));
            console.log(acceptableBotPlacement(_1.botArray));
            console.log(helpFunction());
            if (hitPoints > 0) {
                botShot();
            }
        });
    }
}
exports.playerShot = playerShot;
function helpFunction() {
    let dingus = [];
    _1.botArray.forEach((element) => {
        if (element.occupied === true) {
            dingus.push(element);
        }
    });
    return dingus;
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
