"use strict";
// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBoardArray = exports.gameBoard = void 0;
function gameBoard() { }
exports.gameBoard = gameBoard;
// 0-9 for x, when x reaches 9 iterate y by 1
function generateBoardArray() {
    let boardArray = [];
    let x = 0;
    let y = 0;
    for (let i = 1; i < 100; i++) {
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
console.log(generateBoardArray());
