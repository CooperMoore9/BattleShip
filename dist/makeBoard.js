"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGrid = void 0;
const playerGrid = document.getElementById("playerGrid");
const botGrid = document.getElementById("botGrid");
function makeGrid(input, container) {
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    for (let i = 0; i < input * input; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add(`${i}`, "box", "border-2", "border-sky-800");
        gridBox.addEventListener("mouseover", () => {
            gridBox.style.backgroundColor = "grey";
            let boxNum = gridBox.className.slice(0, 2).trim();
            console.log(boxNum);
        });
        gridBox.addEventListener("mouseleave", () => {
            gridBox.style.backgroundColor = "white";
        });
        container.appendChild(gridBox);
    }
}
exports.makeGrid = makeGrid;
function clearGrid() {
    const deleteTheBoxes = document.querySelectorAll(".box");
    deleteTheBoxes.forEach((div) => {
        div.remove();
    });
}
makeGrid(10, playerGrid);
// makeGrid(10, botGrid);
