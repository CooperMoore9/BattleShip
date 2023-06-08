import { doc } from "prettier";

const playerGrid = document.getElementById("playerGrid") as HTMLElement;
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

    gridBox.addEventListener("mouseover", () => {
      gridBox.style.backgroundColor = "grey";
      let xCord = gridBox.className.slice(0, 2).trim();
      let yCord = gridBox.className.slice(2, 5).trim();
      console.log(gridBox.classList);
      // console.log(xCord);
      // console.log(yCord);
    });

    gridBox.addEventListener("mouseleave", () => {
      gridBox.style.backgroundColor = "white";
    });

    container.appendChild(gridBox);
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
// makeBotGrid();
