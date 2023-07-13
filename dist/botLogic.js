"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerShot = exports.acceptableShots = void 0;
const _1 = require(".");
const boardSetup_1 = require("./boardSetup");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function placeBotShips(placementArr, botLength) {
    let randomNum = getRandomInt(placementArr.length);
    for (let i = 0; i < botLength; i++) {
        _1.botArray[randomNum].occupied = true;
        randomNum++;
    }
}
function acceptableBotPlacement(gridArray, botLength) {
    let acceptablePlacementArr = [];
    for (let i = 0; i < gridArray.length; i++) {
        if (gridArray[i].occupied === false) {
            acceptablePlacementArr.push(gridArray[i]);
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
}
exports.acceptableShots = acceptableShots;
function playerShot() {
    for (let i = 0; i < boardSetup_1.botGrid.children.length; i++) {
        boardSetup_1.botGrid.children[i].classList.add("cursor-pointer");
        let x = parseInt(boardSetup_1.botGrid.children[i].classList[0].charAt(1));
        let y = parseInt(boardSetup_1.botGrid.children[i].classList[1].charAt(1));
        boardSetup_1.botGrid.children[i].addEventListener("mousedown", () => {
            // botArray[i].splash = true;
        });
    }
}
exports.playerShot = playerShot;
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
