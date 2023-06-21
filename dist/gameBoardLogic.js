"use strict";
// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMouseCord = exports.ghostShip = exports.generateBoardArray = exports.gameBoard = exports.boardArray = void 0;
// First things first, generate a grid?
// be able to track every part of the board
// make array that every index contains a  grid box
const boardSetup_1 = require("./boardSetup");
exports.boardArray = generateBoardArray();
function gameBoard(gridArray) {
    function updateGameBoard() {
        gridArray.forEach((element) => {
            if (element.occupied === true) {
                let boardSection = boardSetup_1.playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];
                boardSection.classList.add("bg-black");
            }
        });
    }
    function placeShip(x, y, length) {
        for (let i = 0; i < length; i++) {
            gridArray[parseInt(`${y}${x}`)].occupied = true;
            x++;
        }
    }
    placeShip(6, 5, 4);
    placeShip(4, 2, 3);
    updateGameBoard();
}
exports.gameBoard = gameBoard;
// 0-9 for x, when x reaches 9 iterate y by 1
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
// if i + j is occupied then invalid
function ghostShip(shipLength, gridArray) {
    for (let i = 0; i <= gridArray.length - 1; i++) {
        for (let j = 0; j < shipLength; j++) {
            if (gridArray[i + j]) {
                if (gridArray[i + j].occupied === true) {
                    boardSetup_1.playerGrid.children[i].classList.add("cursor-not-allowed");
                }
            }
        }
        if (shipLength + gridArray[i].xCord >= 11 ||
            gridArray[i].occupied === true) {
            boardSetup_1.playerGrid.children[i].classList.add("cursor-not-allowed");
        }
        else if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
            boardSetup_1.playerGrid.children[i].addEventListener("mouseover", () => {
                for (let j = 0; j < shipLength; j++) {
                    boardSetup_1.playerGrid.children[i + j].classList.add("bg-neutral-600");
                }
            });
        }
        boardSetup_1.playerGrid.children[i].addEventListener("mouseleave", () => {
            for (let j = 0; j < shipLength; j++) {
                if (boardSetup_1.playerGrid.children[i + j]) {
                    boardSetup_1.playerGrid.children[i + j].classList.remove("bg-neutral-600");
                }
                else {
                    boardSetup_1.playerGrid.children[i].classList.remove("bg-neutral-600");
                }
            }
        });
    }
}
exports.ghostShip = ghostShip;
function getMouseCord() {
    for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {
        boardSetup_1.playerGrid.children[i].addEventListener("mousedown", () => {
            if (boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed"))
                console.log("you dingus");
            else {
                console.log(boardSetup_1.playerGrid.children[i].classList[0], boardSetup_1.playerGrid.children[i].classList[1]);
            }
        });
    }
}
exports.getMouseCord = getMouseCord;
