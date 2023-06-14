"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGrid = exports.playerGrid = void 0;
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
exports.makeGrid = makeGrid;
function ghostShip(shipLength) {
    for (let i = 0; i < exports.playerGrid.children.length; i++) {
        exports.playerGrid.children[i].addEventListener("mouseover", () => {
            exports.playerGrid.children[i].classList.add("bg-neutral-600");
            for (let j = 0; j < shipLength; j++) {
                exports.playerGrid.children[i + j].classList.add("bg-neutral-600");
            }
            // playerGrid.children[i].classList.add("bg-neutral-600");
            // playerGrid.children[i + shipLength].classList.add("bg-neutral-600");
        });
        exports.playerGrid.children[i].addEventListener("mouseleave", () => {
            exports.playerGrid.children[i].classList.remove("bg-neutral-600");
            for (let j = 0; j < shipLength; j++) {
                exports.playerGrid.children[i + j].classList.remove("bg-neutral-600");
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
makeGrid(10, exports.playerGrid);
// makeBotGrid(); !IMPORTANT
// logGridSection(4, 4);
ghostShip(3);
