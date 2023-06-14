import { doc } from "prettier";

export const playerGrid = document.getElementById("playerGrid") as HTMLElement;
const playerDiv = document.getElementById("playerDiv") as HTMLElement;
const botDiv = document.getElementById("botDiv") as HTMLElement;
botDiv.style.visibility = "hidden";
const botGrid = document.getElementById("botGrid") as HTMLElement;

export function makeGrid(input: number, container: HTMLElement) {
  container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

  for (let i = 0; i < input * input; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add(
      `x${i % 10}`,
      `y${Math.floor((i / 10) % 10)}`,
      "box",
      "border-2",
      "border-sky-800"
    );

    gridBox.style.backgroundColor = "white";

    // gridBox.addEventListener("mouseover", () => {
    //   gridBox.style.backgroundColor = "grey";
    // });

    // gridBox.addEventListener("mouseleave", () => {
    //   gridBox.style.backgroundColor = "white";
    // });

    gridBox.addEventListener("mousedown", () => {
      let xCord = parseInt(gridBox.className.slice(1, 2).trim());
      let yCord = parseInt(gridBox.className.slice(4, 5).trim());
      console.log("x", xCord, "y", yCord);
    });

    container.appendChild(gridBox);
  }
}

function ghostShip(shipLength: number) {
  for (let i = 0; i < playerGrid.children.length; i++) {
    playerGrid.children[i].addEventListener("mouseover", () => {
      playerGrid.children[i].classList.add("bg-neutral-600");
      for (let j = 0; j < shipLength; j++) {
        playerGrid.children[i + j].classList.add("bg-neutral-600");
      }
      // playerGrid.children[i].classList.add("bg-neutral-600");
      // playerGrid.children[i + shipLength].classList.add("bg-neutral-600");
    });

    playerGrid.children[i].addEventListener("mouseleave", () => {
      playerGrid.children[i].classList.remove("bg-neutral-600");
      for (let j = 0; j < shipLength; j++) {
        playerGrid.children[i + j].classList.remove("bg-neutral-600");
      }
      // playerGrid.children[i + shipLength].classList.remove("bg-neutral-600");
    });
  }
}

function makeBotGrid() {
  console.log(playerDiv.classList);
  playerDiv.classList.replace("w-[99vw]", "w-[50vw]");
  botDiv.classList.replace("w-[0vw]", "w-[50vw]");
  botDiv.style.visibility = "visible";
  makeGrid(10, botGrid);
}

function clearGrid() {
  const deleteTheBoxes = document.querySelectorAll(".box");
  deleteTheBoxes.forEach((div) => {
    div.remove();
  });
}

makeGrid(10, playerGrid);
// makeBotGrid(); !IMPORTANT

// logGridSection(4, 4);
ghostShip(3);
