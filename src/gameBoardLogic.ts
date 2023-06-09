// Factory Function for gameBoard
// needs to be a factory function because im gonna need to make 2 per game
// one for the player to place pieces and one for the player to click on to shoot at

// First things first, generate a grid?
// be able to track every part of the board

// make array that every index contains a  grid box
let playerGrid = document.querySelectorAll(".box");
let xCord = 0;
let yCord = 0;

XCordListener();
yCordListener();

function XCordListener() {
  playerGrid.forEach((box) => {
    box.addEventListener("mousedown", () => {
      xCord = parseInt(box.className.slice(1, 2).trim());
    });
  });
}

function yCordListener() {
  playerGrid.forEach((box) => {
    box.addEventListener("mousedown", () => {
      yCord = parseInt(box.className.slice(4, 5).trim());
      console.log("x", xCord, "y", yCord);
    });
  });
}

export function gameBoard() {}
