import { doc } from "prettier";
import { boardArray, botArray } from ".";

export const playerGrid = document.getElementById("playerGrid") as HTMLElement;
export const botGrid = document.getElementById("botGrid") as HTMLElement;
const playerDiv = document.getElementById("playerDiv") as HTMLElement;
const botDiv = document.getElementById("botDiv") as HTMLElement;
const spacer1 = document.getElementById("spacer1") as HTMLElement;
botDiv.style.visibility = "hidden";

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
    container.appendChild(gridBox);
  }
}

export function makeBotGrid() {
  botDiv.style.visibility = "visible";
  playerDiv.classList.replace("w-[99vw]", "w-[50vw]");
  botDiv.classList.replace("w-[0vw]", "w-[48vw]");
  botGrid.classList.replace("w-[0vh]", "w-[48vh]");
  spacer1.classList.add("h-[24px]");
  makeGrid(10, botGrid);
}

export function clearGrid(grid: HTMLElement) {
  const deleteTheBoxes = grid.querySelectorAll(".box");
  deleteTheBoxes.forEach((div) => {
    div.remove();
  });
}

makeGrid(10, playerGrid);
// makeBotGrid(); !IMPORTANT
