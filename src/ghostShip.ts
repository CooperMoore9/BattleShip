import { playerGrid } from "./boardSetup";
import { gridObject } from "./types";

export let vertNum = 10;

export function ghostShip(shipLength: number, gridArray: Array<gridObject>) {
  for (let i = 0; i <= gridArray.length - 1; i++) {
    for (let j = 0; j < shipLength; j++) {
      if (gridArray[i + j * vertNum]) {
        if (gridArray[i + j * vertNum].occupied === true) {
          playerGrid.children[i].classList.add("cursor-not-allowed");
        }
      }
    }

    if (vertNum === 1) {
      if (
        shipLength + gridArray[i].xCord >= 11 ||
        gridArray[i].occupied === true
      ) {
        playerGrid.children[i].classList.add("cursor-not-allowed");
      } else if (
        !playerGrid.children[i].classList.contains("cursor-not-allowed")
      ) {
        playerGrid.children[i].addEventListener("mouseover", () => {
          for (let j = 0; j < shipLength; j++) {
            playerGrid.children[i + j * vertNum].classList.add(
              "bg-neutral-600"
            );
          }
        });
      }
    } else {
      if (
        shipLength + gridArray[i].yCord >= 11 ||
        gridArray[i].occupied === true
      ) {
        playerGrid.children[i].classList.add("cursor-not-allowed");
      } else if (
        !playerGrid.children[i].classList.contains("cursor-not-allowed")
      ) {
        playerGrid.children[i].addEventListener("mouseover", () => {
          for (let j = 0; j < shipLength; j++) {
            playerGrid.children[i + j * vertNum].classList.add(
              "bg-neutral-600"
            );
          }
        });
      }
    }

    playerGrid.children[i].addEventListener("mouseleave", () => {
      for (let j = 0; j < shipLength; j++) {
        if (playerGrid.children[i + j * vertNum]) {
          playerGrid.children[i + j * vertNum].classList.remove(
            "bg-neutral-600"
          );
        } else {
          playerGrid.children[i].classList.remove("bg-neutral-600");
        }
      }
    });
  }
}

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
