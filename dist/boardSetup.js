"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearGrid = exports.makeGrid = exports.playerGrid = void 0;
exports.playerGrid = document.getElementById("playerGrid");
const playerDiv = document.getElementById("playerDiv");
const botDiv = document.getElementById("botDiv");
botDiv.style.visibility = "hidden";
const botGrid = document.getElementById("botGrid");
function makeGrid(input, container) {
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    for (let i = 0; i < input * input; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add(`x${i % 10}`, `y${Math.floor((i / 10) % 10)}`, "box", "border-2", "border-sky-800");
        container.appendChild(gridBox);
    }
}
exports.makeGrid = makeGrid;
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
exports.clearGrid = clearGrid;
makeGrid(10, exports.playerGrid);
// makeBotGrid(); !IMPORTANT
