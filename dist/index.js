"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boardSetup_1 = require("./boardSetup");
const gameBoardLogic_1 = require("./gameBoardLogic");
const ghostShip_1 = require("./ghostShip");
boardSetup_1.makeGrid;
(0, gameBoardLogic_1.gameBoard)(gameBoardLogic_1.boardArray);
// getMouseCord();
(0, ghostShip_1.ghostShip)(5, gameBoardLogic_1.boardArray);
