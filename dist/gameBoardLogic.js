"use strict";
// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMouseCord = exports.generateBoardArray = exports.gameBoard = exports.boardArray = void 0;
// First things first, generate a grid?
// be able to track every part of the board
// make array that every index contains a  grid box
const boardSetup_1 = require("./boardSetup");
const ghostShip_1 = require("./ghostShip");
exports.boardArray = generateBoardArray();
let shipCounter = 0;
function gameBoard(gridArray) {
    let length = 5;
    function updateGameBoard() {
        gridArray.forEach((element) => {
            if (element.occupied === true) {
                let boardSection = boardSetup_1.playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];
                boardSection.classList.add("bg-black");
            }
        });
    }
    function placeShipOnBoard(length) {
        for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {
            boardSetup_1.playerGrid.children[i].addEventListener("mousedown", () => {
                let x = parseInt(boardSetup_1.playerGrid.children[i].classList[0].charAt(1));
                let y = parseInt(boardSetup_1.playerGrid.children[i].classList[1].charAt(1));
                if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
                    if (x + length <= 10) {
                        shipCounter++;
                        placeShipInArray(x, y, length);
                        (0, boardSetup_1.clearGrid)();
                        (0, boardSetup_1.makeGrid)(10, boardSetup_1.playerGrid);
                        updateGameBoard();
                        if (shipCounter === 3) {
                            length++;
                        }
                        if (length > 2) {
                            length--;
                            (0, ghostShip_1.ghostShip)(length, gridArray);
                            placeShipOnBoard(length);
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
    (0, ghostShip_1.ghostShip)(length, gridArray);
    placeShipOnBoard(length);
}
exports.gameBoard = gameBoard;
function generateBoardArray() {
    let boardArray = [];
    let x = 0;
    let y = 0;
    for (let i = 1; i <= 100; i++) {
        if (x === 10) {
            x = 0;
            y++;
        }
        boardArray.push({ xCord: x, yCord: y, occupied: false });
        x++;
    }
    return boardArray;
}
exports.generateBoardArray = generateBoardArray;
function getMouseCord() {
    for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {
        boardSetup_1.playerGrid.children[i].addEventListener("mousedown", () => {
            if (boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed"))
                console.log("you dingus");
            else {
                let x = parseInt(boardSetup_1.playerGrid.children[i].classList[0].charAt(1));
                let y = parseInt(boardSetup_1.playerGrid.children[i].classList[1].charAt(1));
                console.log(x, y);
                return parseInt(`${y}${x}`);
            }
        });
    }
}
exports.getMouseCord = getMouseCord;
