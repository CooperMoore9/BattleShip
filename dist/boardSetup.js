"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGrid = void 0;
const playerGrid = document.getElementById("playerGrid");
const playerDiv = document.getElementById("playerDiv");
const botDiv = document.getElementById("botDiv");
botDiv.style.visibility = "hidden";
const botGrid = document.getElementById("botGrid");
function makeGrid(input, container) {
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    for (let i = 0; i < input * input; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add(`x${i % 10}`, `y${Math.floor((i / 10) % 10)}`, "box", "border-2", "border-sky-800");
        gridBox.style.backgroundColor = "white";
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = "grey";
        });
        gridBox.addEventListener("mouseleave", () => {
            gridBox.style.backgroundColor = "white";
        });
        gridBox.addEventListener("mousedown", () => {
            let xCord = parseInt(gridBox.className.slice(1, 2).trim());
            let yCord = parseInt(gridBox.className.slice(4, 5).trim());
            console.log("x", xCord, "y", yCord);
        });
        container.appendChild(gridBox);
    }
}
exports.makeGrid = makeGrid;
function logGridSection(x, y) {
    let gridSection = document.getElementsByClassName(`x${x} y${y}`);
    console.log(gridSection);
}
logGridSection(1, 6);
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
