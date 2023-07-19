"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerShot = exports.acceptableShots = exports.placeBotShips = void 0;
const _1 = require(".");
const boardSetup_1 = require("./boardSetup");
const gameBoardLogic_1 = require("./gameBoardLogic");
let hitPoints = 17;
let botHitPoints = 17;
let botShipLength = 5;
let vertNum = getRandomInt(2);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function placeBotShips() {
    for (let i = 0; i < 4; i++) {
        vertNum = getRandomInt(2);
        let randomNum = getRandomInt(acceptableBotPlacement(_1.botArray).length);
        let placement = getActualPlacement(randomNum);
        if (botShipLength >= 2)
            if (botShipLength === 3) {
                let randomNum = getRandomInt(acceptableBotPlacement(_1.botArray).length);
                let placement = getActualPlacement(randomNum);
                for (let i = 0; i < botShipLength; i++) {
                    if (vertNum === 0) {
                        _1.botArray[placement].occupied = true;
                        placement++;
                    }
                    else {
                        _1.botArray[placement].occupied = true;
                        placement += 10;
                    }
                }
            }
        for (let i = 0; i < botShipLength; i++) {
            if (vertNum === 0) {
                _1.botArray[placement].occupied = true;
                placement++;
            }
            else {
                _1.botArray[placement].occupied = true;
                placement += 10;
            }
        }
        botShipLength--;
    }
}
exports.placeBotShips = placeBotShips;
function getActualPlacement(rng) {
    let botPlacementArr = acceptableBotPlacement(_1.botArray);
    for (let i = 0; i < _1.botArray.length; i++) {
        if (_1.botArray[i].xCord === botPlacementArr[rng].xCord &&
            _1.botArray[i].yCord === botPlacementArr[rng].yCord) {
            return i;
        }
    }
    return 0;
}
function acceptableBotPlacement(gridArray) {
    let acceptablePlacementArr = [];
    // let vertMultiply = 1
    // if(vertNum === 0){
    //   vertMultiply = 1
    // }else if(vertNum === 1){
    //   vertMultiply = 10
    // }
    // for (let i = 0; i <= gridArray.length - 1; i++) {
    //   for (let j = 0; j < botShipLength; j++) {
    //     if (gridArray[i + j * vertMultiply]) {
    //       if (gridArray[i + j * vertMultiply].occupied === false) {
    //         acceptablePlacementArr.push(gridArray[i])
    //       }
    //     }
    //   }
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
    }
    else {
        acceptableShots(_1.boardArray)[rng].splash = true;
    }
    (0, gameBoardLogic_1.updateGameBoard)(_1.boardArray, boardSetup_1.playerGrid);
    playerShot();
}
function playerShot() {
    (0, boardSetup_1.makeBotGrid)();
    (0, gameBoardLogic_1.updateGameBoard)(_1.botArray, boardSetup_1.botGrid);
    for (let i = 0; i < boardSetup_1.botGrid.children.length; i++) {
        boardSetup_1.botGrid.children[i].classList.add("cursor-pointer");
        let x = parseInt(boardSetup_1.botGrid.children[i].classList[0].charAt(1));
        let y = parseInt(boardSetup_1.botGrid.children[i].classList[1].charAt(1));
        boardSetup_1.botGrid.children[i].addEventListener("mousedown", () => {
            if (_1.botArray[i].occupied === true && _1.botArray[i].hit === false) {
                _1.botArray[i].hit = true;
                botHitPoints--;
                (0, gameBoardLogic_1.updateGameBoard)(_1.botArray, boardSetup_1.botGrid);
                if (botHitPoints != 0 && hitPoints != 0) {
                    botShot();
                }
                else {
                    console.log("someone lost");
                }
            }
            else if (_1.botArray[i].splash === false &&
                _1.botArray[i].occupied === false) {
                _1.botArray[i].splash = true;
                (0, gameBoardLogic_1.updateGameBoard)(_1.botArray, boardSetup_1.botGrid);
                if (botHitPoints != 0 && hitPoints != 0) {
                    botShot();
                }
                else {
                    console.log("someone lost");
                }
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
