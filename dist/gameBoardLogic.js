"use strict";
// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGameBoard = exports.gameBoard = exports.currentLength = void 0;
const boardSetup_1 = require("./boardSetup");
const ghostShip_1 = require("./ghostShip");
const rotateShip_1 = require("./rotateShip");
const shipLogic_1 = require("./shipLogic");
let shipArray = [];
let shipCounter = 0;
exports.currentLength = 5;
function gameBoard(gridArray) {
    (0, ghostShip_1.ghostShip)(exports.currentLength, gridArray);
    placeShip();
    function placeShip() {
        for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {
            boardSetup_1.playerGrid.children[i].addEventListener("mousedown", () => {
                let x = parseInt(boardSetup_1.playerGrid.children[i].classList[0].charAt(1));
                let y = parseInt(boardSetup_1.playerGrid.children[i].classList[1].charAt(1));
                if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
                    if (rotateShip_1.vertNum === 1) {
                        if (x + exports.currentLength <= 10) {
                            shipCounter++;
                            placeShipInArray(x, y, exports.currentLength);
                            updateGameBoard(gridArray);
                            let tempShip = (0, shipLogic_1.createShip)(exports.currentLength, exports.currentLength, false);
                            shipArray.push(tempShip);
                            exports.currentLength--;
                            if (shipCounter === 3) {
                                exports.currentLength++;
                            }
                            if (exports.currentLength >= 2) {
                                (0, ghostShip_1.ghostShip)(exports.currentLength, gridArray);
                                placeShip();
                            }
                            else {
                                (0, boardSetup_1.makeBotGrid)();
                            }
                        }
                    }
                    else {
                        if (y + exports.currentLength <= 10) {
                            shipCounter++;
                            placeShipInArray(x, y, exports.currentLength);
                            updateGameBoard(gridArray);
                            let tempShip = (0, shipLogic_1.createShip)(exports.currentLength, exports.currentLength, false);
                            shipArray.push(tempShip);
                            exports.currentLength--;
                            if (shipCounter === 3) {
                                exports.currentLength++;
                            }
                            if (exports.currentLength >= 2) {
                                (0, ghostShip_1.ghostShip)(exports.currentLength, gridArray);
                                placeShip();
                            }
                            else {
                                (0, boardSetup_1.makeBotGrid)();
                            }
                        }
                    }
                }
            });
        }
    }
    function placeShipInArray(x, y, length) {
        for (let i = 0; i < length; i++) {
            gridArray[parseInt(`${y}${x}`)].occupied = true;
            if (rotateShip_1.vertNum === 1) {
                x++;
            }
            else {
                y++;
            }
        }
    }
}
exports.gameBoard = gameBoard;
function updateGameBoard(gridArray) {
    (0, boardSetup_1.clearGrid)();
    (0, boardSetup_1.makeGrid)(10, boardSetup_1.playerGrid);
    gridArray.forEach((element) => {
        if (element.occupied === true) {
            let boardSection = boardSetup_1.playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];
            boardSection.classList.add("bg-black");
        }
    });
}
exports.updateGameBoard = updateGameBoard;
