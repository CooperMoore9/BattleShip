"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ghostShip = void 0;
const boardSetup_1 = require("./boardSetup");
function ghostShip(shipLength, gridArray) {
    for (let i = 0; i <= gridArray.length - 1; i++) {
        for (let j = 0; j < shipLength; j++) {
            if (gridArray[i + j]) {
                if (gridArray[i + j].occupied === true) {
                    boardSetup_1.playerGrid.children[i].classList.add("cursor-not-allowed");
                }
            }
        }
        if (shipLength + gridArray[i].xCord >= 11 ||
            gridArray[i].occupied === true) {
            boardSetup_1.playerGrid.children[i].classList.add("cursor-not-allowed");
        }
        else if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
            boardSetup_1.playerGrid.children[i].addEventListener("mouseover", () => {
                for (let j = 0; j < shipLength; j++) {
                    boardSetup_1.playerGrid.children[i + j].classList.add("bg-neutral-600");
                }
            });
        }
        boardSetup_1.playerGrid.children[i].addEventListener("mouseleave", () => {
            for (let j = 0; j < shipLength; j++) {
                if (boardSetup_1.playerGrid.children[i + j]) {
                    boardSetup_1.playerGrid.children[i + j].classList.remove("bg-neutral-600");
                }
                else {
                    boardSetup_1.playerGrid.children[i].classList.remove("bg-neutral-600");
                }
            }
        });
    }
}
exports.ghostShip = ghostShip;
