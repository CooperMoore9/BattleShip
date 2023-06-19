"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boardSetup_1 = require("./boardSetup");
const gameBoardLogic_1 = require("./gameBoardLogic");
boardSetup_1.makeGrid;
(0, gameBoardLogic_1.gameBoard)(gameBoardLogic_1.boardArray);
