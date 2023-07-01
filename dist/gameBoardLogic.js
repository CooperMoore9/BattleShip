"use strict";
// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGameBoard = exports.gameBoard = exports.vertNum = void 0;
const boardSetup_1 = require("./boardSetup");
const ghostShip_1 = require("./ghostShip");
const shipLogic_1 = require("./shipLogic");
exports.vertNum = 10;
let length = 5;
const rotateButton = document.getElementById("rotateButton");
let shipArray = [];
let shipCounter = 0;
function gameBoard(gridArray) {
    (0, ghostShip_1.ghostShip)(length, gridArray);
    placeShip(length);
    function placeShip(length) {
        for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {
            boardSetup_1.playerGrid.children[i].addEventListener("mousedown", () => {
                let x = parseInt(boardSetup_1.playerGrid.children[i].classList[0].charAt(1));
                let y = parseInt(boardSetup_1.playerGrid.children[i].classList[1].charAt(1));
                if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
                    if (x + length <= 10) {
                        shipCounter++;
                        placeShipInArray(x, y, length);
                        updateGameBoard(gridArray);
                        let tempShip = (0, shipLogic_1.createShip)(length, length, false);
                        shipArray.push(tempShip);
                        if (shipCounter === 3) {
                            length++;
                        }
                        if (length > 2) {
                            length--;
                            console.log(length);
                            (0, ghostShip_1.ghostShip)(length, gridArray);
                            placeShip(length);
                        }
                        else {
                            (0, boardSetup_1.makeBotGrid)();
                        }
                    }
                }
            });
        }
    }
    function placeShipInArray(x, y, length) {
        for (let i = 0; i < length; i++) {
            gridArray[parseInt(`${y}${x}`)].occupied = true;
            x++;
        }
    }
    rotateButton.addEventListener("click", () => {
        if (exports.vertNum === 1) {
            exports.vertNum = 10;
        }
        else {
            exports.vertNum = 1;
        }
        placeShip(length);
    });
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
