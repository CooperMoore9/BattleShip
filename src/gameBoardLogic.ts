// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at

// First things first, generate a grid?
// be able to track every part of the board
//

const playerGrid = document.getElementById("playerGrid") as HTMLElement;
const botGrid = document.getElementById("botGrid") as HTMLElement;

export function gameBoard() {
  makeGrid(10, playerGrid);
  makeGrid(10, botGrid);
}

function makeGrid(input: number, container: HTMLElement) {
  container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

  for (let i = 0; i < input * input; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add(`${i}`, "box", "border-2", "border-sky-800");
    container.appendChild(gridBox);
  }
}

function clearGrid() {
  const deleteTheBoxes = document.querySelectorAll(".box");
  deleteTheBoxes.forEach((div) => {
    div.remove();
  });
}
