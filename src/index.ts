import { makeGrid } from "./boardSetup";
import {
  boardArray,
  gameBoard,
  getMouseCord,
  ghostShip,
} from "./gameBoardLogic";

makeGrid;
gameBoard(boardArray);
getMouseCord();
ghostShip(4, boardArray);
