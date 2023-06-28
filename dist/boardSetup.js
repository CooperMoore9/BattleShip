"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearGrid = exports.makeBotGrid = exports.makeGrid = exports.botGrid = exports.playerGrid = void 0;
exports.playerGrid = document.getElementById("playerGrid");
exports.botGrid = document.getElementById("botGrid");
const playerDiv = document.getElementById("playerDiv");
const botDiv = document.getElementById("botDiv");
const spacer1 = document.getElementById("spacer1");
botDiv.style.visibility = "hidden";
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
    botDiv.style.visibility = "visible";
    playerDiv.classList.replace("w-[99vw]", "w-[50vw]");
    botDiv.classList.replace("w-[0vw]", "w-[48vw]");
    exports.botGrid.classList.replace("w-[0vh]", "w-[48vh]");
    spacer1.classList.add("h-[74px]");
    makeGrid(10, exports.botGrid);
}
exports.makeBotGrid = makeBotGrid;
function clearGrid() {
    const deleteTheBoxes = document.querySelectorAll(".box");
    deleteTheBoxes.forEach((div) => {
        div.remove();
    });
}
exports.clearGrid = clearGrid;
makeGrid(10, exports.playerGrid);
// makeBotGrid(); !IMPORTANT
