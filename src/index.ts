import { makeGrid } from "./boardSetup";
import { gameBoard } from "./gameBoardLogic";
import { generateBoardArray } from "./generateBoardArray";
import { ghostShip } from "./ghostShip";
export let boardArray = generateBoardArray();

makeGrid;
gameBoard(boardArray);
