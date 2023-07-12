"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBoardArray = void 0;
function generateBoardArray() {
    let boardArray = [];
    let x = 0;
    let y = 0;
    for (let i = 1; i <= 100; i++) {
        if (x === 10) {
            x = 0;
            y++;
        }
        boardArray.push({
            xCord: x,
            yCord: y,
            occupied: false,
            hit: false,
            splash: false,
        });
        x++;
    }
    return boardArray;
}
exports.generateBoardArray = generateBoardArray;
