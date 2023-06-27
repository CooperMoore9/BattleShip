/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boardSetup.ts":
/*!***************************!*\
  !*** ./src/boardSetup.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.clearGrid = exports.makeBotGrid = exports.makeGrid = exports.botGrid = exports.playerGrid = void 0;\r\nexports.playerGrid = document.getElementById(\"playerGrid\");\r\nexports.botGrid = document.getElementById(\"botGrid\");\r\nconst playerDiv = document.getElementById(\"playerDiv\");\r\nconst botDiv = document.getElementById(\"botDiv\");\r\nbotDiv.style.visibility = \"hidden\";\r\nfunction makeGrid(input, container) {\r\n    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;\r\n    for (let i = 0; i < input * input; i++) {\r\n        const gridBox = document.createElement(\"div\");\r\n        gridBox.classList.add(`x${i % 10}`, `y${Math.floor((i / 10) % 10)}`, \"box\", \"border-2\", \"border-sky-800\");\r\n        container.appendChild(gridBox);\r\n    }\r\n}\r\nexports.makeGrid = makeGrid;\r\nfunction makeBotGrid() {\r\n    playerDiv.classList.replace(\"w-[99vw]\", \"w-[50vw]\");\r\n    botDiv.classList.replace(\"w-[0vw]\", \"w-[50vw]\");\r\n    botDiv.style.visibility = \"visible\";\r\n    makeGrid(10, exports.botGrid);\r\n}\r\nexports.makeBotGrid = makeBotGrid;\r\nfunction clearGrid() {\r\n    const deleteTheBoxes = document.querySelectorAll(\".box\");\r\n    deleteTheBoxes.forEach((div) => {\r\n        div.remove();\r\n    });\r\n}\r\nexports.clearGrid = clearGrid;\r\nmakeGrid(10, exports.playerGrid);\r\n// makeBotGrid(); !IMPORTANT\r\n\n\n//# sourceURL=webpack://battleShip/./src/boardSetup.ts?");

/***/ }),

/***/ "./src/gameBoardLogic.ts":
/*!*******************************!*\
  !*** ./src/gameBoardLogic.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\n// Factory Function for gameBoard\r\n// needs to be a factory function because im gonna need to make 2 per game\r\n// one for the player to place pieces and one for the player to click on to shoot at\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.gameBoard = exports.generateBoardArray = exports.shipArray = exports.boardArray = void 0;\r\n// First things first, generate a grid?\r\n// be able to track every part of the board\r\n// make array that every index contains a  grid box\r\n// IDEA IDEA// IDEA IDEA// IDEA IDEA// IDEA IDEA// IDEA IDEA\r\n// for when the bot is randomly choosing from the playerGrid when attacking,\r\n// have it choose a random element in the array, when it does remove the element from the array,\r\n// and update the array accordingly if it hit or not, the subtract from ship hit points\r\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\r\nconst ghostShip_1 = __webpack_require__(/*! ./ghostShip */ \"./src/ghostShip.ts\");\r\nconst shipLogic_1 = __webpack_require__(/*! ./shipLogic */ \"./src/shipLogic.ts\");\r\nexports.boardArray = generateBoardArray();\r\nexports.shipArray = [];\r\nlet shipCounter = 0;\r\nfunction generateBoardArray() {\r\n    let boardArray = [];\r\n    let x = 0;\r\n    let y = 0;\r\n    for (let i = 1; i <= 100; i++) {\r\n        if (x === 10) {\r\n            x = 0;\r\n            y++;\r\n        }\r\n        boardArray.push({ xCord: x, yCord: y, occupied: false });\r\n        x++;\r\n    }\r\n    return boardArray;\r\n}\r\nexports.generateBoardArray = generateBoardArray;\r\nfunction gameBoard(gridArray) {\r\n    let length = 5;\r\n    function placeShipOnBoard(length) {\r\n        for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {\r\n            boardSetup_1.playerGrid.children[i].addEventListener(\"mousedown\", () => {\r\n                let x = parseInt(boardSetup_1.playerGrid.children[i].classList[0].charAt(1));\r\n                let y = parseInt(boardSetup_1.playerGrid.children[i].classList[1].charAt(1));\r\n                if (!boardSetup_1.playerGrid.children[i].classList.contains(\"cursor-not-allowed\")) {\r\n                    if (x + length <= 10) {\r\n                        shipCounter++;\r\n                        placeShipInArray(x, y, length);\r\n                        updateGameBoard();\r\n                        let tempShip = (0, shipLogic_1.createShip)(length, length, false);\r\n                        exports.shipArray.push(tempShip);\r\n                        if (shipCounter === 3) {\r\n                            length++;\r\n                        }\r\n                        if (length > 2) {\r\n                            length--;\r\n                            (0, ghostShip_1.ghostShip)(length, gridArray);\r\n                            placeShipOnBoard(length);\r\n                        }\r\n                        else {\r\n                            (0, boardSetup_1.makeBotGrid)();\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n        }\r\n    }\r\n    function placeShipInArray(x, y, length) {\r\n        for (let i = 0; i < length; i++) {\r\n            gridArray[parseInt(`${y}${x}`)].occupied = true;\r\n            x++;\r\n        }\r\n    }\r\n    function updateGameBoard() {\r\n        (0, boardSetup_1.clearGrid)();\r\n        (0, boardSetup_1.makeGrid)(10, boardSetup_1.playerGrid);\r\n        gridArray.forEach((element) => {\r\n            if (element.occupied === true) {\r\n                let boardSection = boardSetup_1.playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];\r\n                boardSection.classList.add(\"bg-black\");\r\n            }\r\n        });\r\n    }\r\n    (0, ghostShip_1.ghostShip)(length, gridArray);\r\n    placeShipOnBoard(length);\r\n}\r\nexports.gameBoard = gameBoard;\r\n\n\n//# sourceURL=webpack://battleShip/./src/gameBoardLogic.ts?");

/***/ }),

/***/ "./src/ghostShip.ts":
/*!**************************!*\
  !*** ./src/ghostShip.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ghostShip = void 0;\r\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\r\nfunction ghostShip(shipLength, gridArray) {\r\n    for (let i = 0; i <= gridArray.length - 1; i++) {\r\n        for (let j = 0; j < shipLength; j++) {\r\n            if (gridArray[i + j]) {\r\n                if (gridArray[i + j].occupied === true) {\r\n                    boardSetup_1.playerGrid.children[i].classList.add(\"cursor-not-allowed\");\r\n                }\r\n            }\r\n        }\r\n        if (shipLength + gridArray[i].xCord >= 11 ||\r\n            gridArray[i].occupied === true) {\r\n            boardSetup_1.playerGrid.children[i].classList.add(\"cursor-not-allowed\");\r\n        }\r\n        else if (!boardSetup_1.playerGrid.children[i].classList.contains(\"cursor-not-allowed\")) {\r\n            boardSetup_1.playerGrid.children[i].addEventListener(\"mouseover\", () => {\r\n                for (let j = 0; j < shipLength; j++) {\r\n                    boardSetup_1.playerGrid.children[i + j].classList.add(\"bg-neutral-600\");\r\n                }\r\n            });\r\n        }\r\n        boardSetup_1.playerGrid.children[i].addEventListener(\"mouseleave\", () => {\r\n            for (let j = 0; j < shipLength; j++) {\r\n                if (boardSetup_1.playerGrid.children[i + j]) {\r\n                    boardSetup_1.playerGrid.children[i + j].classList.remove(\"bg-neutral-600\");\r\n                }\r\n                else {\r\n                    boardSetup_1.playerGrid.children[i].classList.remove(\"bg-neutral-600\");\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\nexports.ghostShip = ghostShip;\r\n\n\n//# sourceURL=webpack://battleShip/./src/ghostShip.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\r\nconst gameBoardLogic_1 = __webpack_require__(/*! ./gameBoardLogic */ \"./src/gameBoardLogic.ts\");\r\nboardSetup_1.makeGrid;\r\n(0, gameBoardLogic_1.gameBoard)(gameBoardLogic_1.boardArray);\r\n// getMouseCord();\r\n\n\n//# sourceURL=webpack://battleShip/./src/index.ts?");

/***/ }),

/***/ "./src/shipLogic.ts":
/*!**************************!*\
  !*** ./src/shipLogic.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n// What do\r\n// ships have length, times hit, if its sunk\r\n// ships have functions that add to times hit (if hit is valid)\r\n// Ships track each chuck\r\n// chuck = each segment of the ship that can be hit\r\n// each chunk tracks if its been hit\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.checkChunks = exports.hitChunk = exports.generateChunks = exports.createShip = void 0;\r\nfunction createShip(length, hitPoints, sunk) {\r\n    return {\r\n        length: length,\r\n        hitPoints: hitPoints,\r\n        sunk: sunk,\r\n        chunks: generateChunks(length),\r\n        hit() {\r\n            this.hitPoints--;\r\n        },\r\n        isSunk() {\r\n            return this.hitPoints <= 0 ? (this.sunk = true) : (this.sunk = false);\r\n        },\r\n    };\r\n}\r\nexports.createShip = createShip;\r\nfunction generateChunks(length) {\r\n    let chunksArr = [];\r\n    for (let i = 1; i <= length; i++) {\r\n        chunksArr.push({ segment: i, isHit: false });\r\n    }\r\n    return chunksArr;\r\n}\r\nexports.generateChunks = generateChunks;\r\nfunction hitChunk(ship, segment) {\r\n    return (ship.chunks[segment].isHit = true);\r\n}\r\nexports.hitChunk = hitChunk;\r\nfunction checkChunks(ship) {\r\n    for (let i = 0; i <= ship.length - 1; i++) {\r\n        if (ship.chunks[i].isHit === false) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.checkChunks = checkChunks;\r\n// let ship1 = createShip(2, 2, false);\r\n// ship1.hit();\r\n// ship1.hit();\r\n// ship1.isSunk();\r\n// ship1.chunks[0].isHit = true;\r\n// ship1.chunks[1].isHit = false;\r\n// console.log(checkChunks(ship1));\r\n// console.log(ship1.chunks);\r\n// console.log(ship1.chunks[1].segment);\r\n\n\n//# sourceURL=webpack://battleShip/./src/shipLogic.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;