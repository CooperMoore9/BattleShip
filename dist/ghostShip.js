"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ghostShip = void 0;
const boardSetup_1 = require("./boardSetup");
const rotateShip_1 = require("./rotateShip");
function ghostShip(shipLength, gridArray) {
    for (let i = 0; i <= gridArray.length - 1; i++) {
        for (let j = 0; j < shipLength; j++) {
            if (gridArray[i + j * rotateShip_1.vertNum]) {
                if (gridArray[i + j * rotateShip_1.vertNum].occupied === true) {
                    boardSetup_1.playerGrid.children[i].classList.add("cursor-not-allowed");
                }
            }
        }
        if (rotateShip_1.vertNum === 1) {
            if (shipLength + gridArray[i].xCord >= 11 ||
                gridArray[i].occupied === true) {
                boardSetup_1.playerGrid.children[i].classList.add("cursor-not-allowed");
            }
            else if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
                boardSetup_1.playerGrid.children[i].addEventListener("mouseover", () => {
                    for (let j = 0; j < shipLength; j++) {
                        boardSetup_1.playerGrid.children[i + j * rotateShip_1.vertNum].classList.add("bg-neutral-600");
                    }
                });
            }
        }
        else {
            if (shipLength + gridArray[i].yCord >= 11 ||
                gridArray[i].occupied === true) {
                boardSetup_1.playerGrid.children[i].classList.add("cursor-not-allowed");
            }
            else if (!boardSetup_1.playerGrid.children[i].classList.contains("cursor-not-allowed")) {
                boardSetup_1.playerGrid.children[i].addEventListener("mouseover", () => {
                    for (let j = 0; j < shipLength; j++) {
                        boardSetup_1.playerGrid.children[i + j * rotateShip_1.vertNum].classList.add("bg-neutral-600");
                    }
                });
            }
        }
        boardSetup_1.playerGrid.children[i].addEventListener("mouseleave", () => {
            for (let j = 0; j < shipLength; j++) {
                if (boardSetup_1.playerGrid.children[i + j * rotateShip_1.vertNum]) {
                    boardSetup_1.playerGrid.children[i + j * rotateShip_1.vertNum].classList.remove("bg-neutral-600");
                }
                else {
                    boardSetup_1.playerGrid.children[i].classList.remove("bg-neutral-600");
                }
            }
        });
    }
}
exports.ghostShip = ghostShip;
// export function ghostShip(shipLength: number, gridArray: Array<gridObject>) {
//   for (let i = 0; i <= gridArray.length - 1; i++) {
//     for (let j = 0; j < shipLength; j++) {
//       if (gridArray[i + j]) {
//         if (gridArray[i + j].occupied === true) {
//           playerGrid.children[i].classList.add("cursor-not-allowed");
//         }
//       }
//     }
//     if (
//       shipLength + gridArray[i].xCord >= 11 ||
//       gridArray[i].occupied === true
//     ) {
//       playerGrid.children[i].classList.add("cursor-not-allowed");
//     } else if (
//       !playerGrid.children[i].classList.contains("cursor-not-allowed")
//     ) {
//       playerGrid.children[i].addEventListener("mouseover", () => {
//         for (let j = 0; j < shipLength; j++) {
//           playerGrid.children[i + j].classList.add("bg-neutral-600");
//         }
//       });
//     }
//     playerGrid.children[i].addEventListener("mouseleave", () => {
//       for (let j = 0; j < shipLength; j++) {
//         if (playerGrid.children[i + j]) {
//           playerGrid.children[i + j].classList.remove("bg-neutral-600");
//         } else {
//           playerGrid.children[i].classList.remove("bg-neutral-600");
//         }
//       }
//     });
//   }
// }
