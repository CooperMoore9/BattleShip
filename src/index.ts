import { makeGrid } from "./boardSetup";
import { gameBoard } from "./gameBoardLogic";
import { generateBoardArray } from "./generateBoardArray";
export let boardArray = generateBoardArray();
export let botArray = generateBoardArray();

makeGrid;
gameBoard(boardArray);
