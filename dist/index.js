"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardArray = void 0;
const boardSetup_1 = require("./boardSetup");
const gameBoardLogic_1 = require("./gameBoardLogic");
const generateBoardArray_1 = require("./generateBoardArray");
exports.boardArray = (0, generateBoardArray_1.generateBoardArray)();
boardSetup_1.makeGrid;
(0, gameBoardLogic_1.gameBoard)(exports.boardArray);
