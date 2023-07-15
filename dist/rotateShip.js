"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vertNum = void 0;
const _1 = require(".");
const boardSetup_1 = require("./boardSetup");
const gameBoardLogic_1 = require("./gameBoardLogic");
const rotateButton = document.getElementById("rotateButton");
exports.vertNum = 1;
rotateButton.addEventListener("click", () => {
    if (exports.vertNum === 1) {
        exports.vertNum = 10;
    }
    else {
        exports.vertNum = 1;
    }
    (0, gameBoardLogic_1.updateGameBoard)(_1.boardArray, boardSetup_1.playerGrid);
    (0, gameBoardLogic_1.gameBoard)(_1.boardArray);
});
