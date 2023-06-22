import { makeGrid } from "./boardSetup";
import { boardArray, gameBoard, getMouseCord } from "./gameBoardLogic";
import { ghostShip } from "./ghostShip";

makeGrid;
gameBoard(boardArray);
// getMouseCord();
ghostShip(5, boardArray);
