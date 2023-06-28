"use strict";
// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameBoard = void 0;
// First things first, generate a grid?
// be able to track every part of the board
// make array that every index contains a  grid box
// IDEA IDEA// IDEA IDEA// IDEA IDEA// IDEA IDEA// IDEA IDEA
// for when the bot is randomly choosing from the playerGrid when attacking,
// have it choose a random element in the array, when it does remove the element from the array,
// and update the array accordingly if it hit or not, the subtract from ship hit points
const boardSetup_1 = require("./boardSetup");
const ghostShip_1 = require("./ghostShip");
const shipLogic_1 = require("./shipLogic");
let shipArray = [];
let shipCounter = 0;
function gameBoard(gridArray) {
    let length = 5;
    function placeShip(length) {
        for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {
            boardSetup_1.playerGrid.children[i].addEventListener("mousedown", () => {
                let x = parseInt(boardSetup_1.playerGrid.children[i].classList[0].charAt(1));
                let y = parseInt(boardSetup_1.playerGrid.children[i].classList[1].charAt(1));
                if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
                    if (x + length <= 10) {
                        shipCounter++;
                        placeShipInArray(x, y, length);
                        updateGameBoard();
                        let tempShip = (0, shipLogic_1.createShip)(length, length, false);
                        shipArray.push(tempShip);
                        if (shipCounter === 3) {
                            length++;
                        }
                        if (length > 2) {
                            length--;
                            (0, ghostShip_1.ghostShip)(length, gridArray);
                            placeShip(length);
                        }
                        else {
                            (0, boardSetup_1.makeBotGrid)();
                        }
                    }
                }
            });
        }
    }
    function placeShipInArray(x, y, length) {
        for (let i = 0; i < length; i++) {
            gridArray[parseInt(`${y}${x}`)].occupied = true;
            x++;
        }
    }
    function updateGameBoard() {
        (0, boardSetup_1.clearGrid)();
        (0, boardSetup_1.makeGrid)(10, boardSetup_1.playerGrid);
        gridArray.forEach((element) => {
            if (element.occupied === true) {
                let boardSection = boardSetup_1.playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];
                boardSection.classList.add("bg-black");
            }
        });
    }
    (0, ghostShip_1.ghostShip)(length, gridArray);
    placeShip(length);
}
exports.gameBoard = gameBoard;
