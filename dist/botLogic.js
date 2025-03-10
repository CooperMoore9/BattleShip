"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerShot = exports.acceptableShots = exports.placeAllBotShips = void 0;
const _1 = require(".");
const boardSetup_1 = require("./boardSetup");
const gameBoardLogic_1 = require("./gameBoardLogic");
let hitPoints = 17;
let botHitPoints = 17;
let botShipLength = 5;
let vertNum = getRandomInt(2);
let thirdShip = false;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomShipPlacementValue() {
    let cordsArr = [];
    if (vertNum === 0) {
        let randomPlaceHoriNum = getRandomInt(10);
        if (randomPlaceHoriNum + botShipLength > 10) {
            return getRandomShipPlacementValue();
        }
        let randomPlaceVertNum = getRandomInt(10);
        cordsArr.push(_1.botArray[parseInt(`${randomPlaceVertNum}${randomPlaceHoriNum}`)]);
        for (let i = 1; i < botShipLength; i++) {
            cordsArr.push(_1.botArray[parseInt(`${randomPlaceVertNum}${randomPlaceHoriNum + i}`)]);
        }
    }
    else {
        let randomPlaceVertNum = getRandomInt(10);
        if (randomPlaceVertNum + botShipLength > 10) {
            return getRandomShipPlacementValue();
        }
        let randomPlaceHoriNum = getRandomInt(10);
        cordsArr.push(_1.botArray[parseInt(`${randomPlaceVertNum}${randomPlaceHoriNum}`)]);
        for (let i = 1; i < botShipLength; i++) {
            cordsArr.push(_1.botArray[parseInt(`${randomPlaceVertNum + i}${randomPlaceHoriNum}`)]);
        }
    }
    return cordsArr;
}
function acceptableBotPlacement(gridArray) {
    let randomShipPlacement = getRandomShipPlacementValue();
    for (let i = 0; i < gridArray.length; i++) {
        for (let j = 0; j < randomShipPlacement.length; j++) {
            if (gridArray[i].xCord === randomShipPlacement[j].xCord &&
                gridArray[i].yCord === randomShipPlacement[j].yCord) {
                if (gridArray[i].occupied) {
                    return acceptableBotPlacement(gridArray);
                }
            }
        }
    }
    return randomShipPlacement;
}
function placeAllBotShips() {
    for (let i = 0; i < 5; i++) {
        placeBotShip();
    }
}
exports.placeAllBotShips = placeAllBotShips;
function placeBotShip() {
    let placementArr = acceptableBotPlacement(_1.botArray);
    for (let i = 0; i < _1.botArray.length; i++) {
        for (let j = 0; j < placementArr.length; j++) {
            if (placementArr[j].xCord === _1.botArray[i].xCord &&
                placementArr[j].yCord === _1.botArray[i].yCord) {
                _1.botArray[i].occupied = true;
            }
        }
    }
    if (botShipLength === 3) {
        if (!thirdShip) {
            botShipLength++;
            thirdShip = true;
        }
    }
    botShipLength--;
    vertNum = getRandomInt(2);
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
    }
    else {
        acceptableShots(_1.boardArray)[rng].splash = true;
    }
    (0, gameBoardLogic_1.updateGameBoard)(_1.boardArray, boardSetup_1.playerGrid);
    playerShot();
}
function playerShot() {
    (0, boardSetup_1.makeBotGrid)();
    updateBotBoard(_1.botArray, boardSetup_1.botGrid);
    for (let i = 0; i < boardSetup_1.botGrid.children.length; i++) {
        if (botHitPoints === 0 || hitPoints === 0) {
            console.log("someone lost");
            (0, gameBoardLogic_1.updateGameBoard)(_1.botArray, boardSetup_1.botGrid);
            return;
        }
        boardSetup_1.botGrid.children[i].classList.add("cursor-pointer");
        boardSetup_1.botGrid.children[i].addEventListener("mousedown", () => {
            if (_1.botArray[i].occupied === true && _1.botArray[i].hit === false) {
                botHitPoints--;
                _1.botArray[i].hit = true;
                (0, gameBoardLogic_1.updateGameBoard)(_1.botArray, boardSetup_1.botGrid);
                botShot();
            }
            else if (_1.botArray[i].splash === false &&
                _1.botArray[i].occupied === false) {
                _1.botArray[i].splash = true;
                (0, gameBoardLogic_1.updateGameBoard)(_1.botArray, boardSetup_1.botGrid);
                botShot();
            }
        });
    }
}
exports.playerShot = playerShot;
function updateBotBoard(gridArray, grid) {
    (0, boardSetup_1.clearGrid)(grid);
    (0, boardSetup_1.makeGrid)(10, grid);
    gridArray.forEach((element) => {
        let boardSection = grid.children[parseInt(`${element.yCord}${element.xCord}`)];
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
