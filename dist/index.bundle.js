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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.makeGrid = exports.playerGrid = void 0;\r\nexports.playerGrid = document.getElementById(\"playerGrid\");\r\nconst playerDiv = document.getElementById(\"playerDiv\");\r\nconst botDiv = document.getElementById(\"botDiv\");\r\nbotDiv.style.visibility = \"hidden\";\r\nconst botGrid = document.getElementById(\"botGrid\");\r\nfunction makeGrid(input, container) {\r\n    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;\r\n    for (let i = 0; i < input * input; i++) {\r\n        const gridBox = document.createElement(\"div\");\r\n        gridBox.classList.add(`x${i % 10}`, `y${Math.floor((i / 10) % 10)}`, \"box\", \"border-2\", \"border-sky-800\");\r\n        container.appendChild(gridBox);\r\n    }\r\n}\r\nexports.makeGrid = makeGrid;\r\nfunction makeBotGrid() {\r\n    console.log(playerDiv.classList);\r\n    playerDiv.classList.replace(\"w-[99vw]\", \"w-[50vw]\");\r\n    botDiv.classList.replace(\"w-[0vw]\", \"w-[50vw]\");\r\n    botDiv.style.visibility = \"visible\";\r\n    makeGrid(10, botGrid);\r\n}\r\nfunction clearGrid() {\r\n    const deleteTheBoxes = document.querySelectorAll(\".box\");\r\n    deleteTheBoxes.forEach((div) => {\r\n        div.remove();\r\n    });\r\n}\r\nmakeGrid(10, exports.playerGrid);\r\n// makeBotGrid(); !IMPORTANT\r\n\n\n//# sourceURL=webpack://battleShip/./src/boardSetup.ts?");

/***/ }),

/***/ "./src/gameBoardLogic.ts":
/*!*******************************!*\
  !*** ./src/gameBoardLogic.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\n// Factory Function for gameBoard\r\n// needs to be a factory function because im gonna need to make 2 per game\r\n// one for the player to place pieces and one for the player to click on to shoot at\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.generateBoardArray = exports.gameBoard = exports.boardArray = void 0;\r\n// First things first, generate a grid?\r\n// be able to track every part of the board\r\n// make array that every index contains a  grid box\r\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\r\nexports.boardArray = generateBoardArray();\r\nfunction gameBoard(gridArray) {\r\n    function updateGameBoard() {\r\n        gridArray.forEach((element) => {\r\n            if (element.occupied === true) {\r\n                let boardSection = boardSetup_1.playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];\r\n                boardSection.classList.add(\"bg-black\");\r\n            }\r\n        });\r\n    }\r\n    function placeShip(x, y, length) {\r\n        for (let i = 0; i < length; i++) {\r\n            gridArray[parseInt(`${y}${x}`)].occupied = true;\r\n            x++;\r\n        }\r\n    }\r\n    placeShip(6, 5, 4);\r\n    placeShip(3, 2, 3);\r\n    updateGameBoard();\r\n}\r\nexports.gameBoard = gameBoard;\r\n// 0-9 for x, when x reaches 9 iterate y by 1\r\nfunction generateBoardArray() {\r\n    let boardArray = [];\r\n    let x = 0;\r\n    let y = 0;\r\n    for (let i = 1; i <= 100; i++) {\r\n        if (x === 10) {\r\n            x = 0;\r\n            y++;\r\n        }\r\n        boardArray.push({ xCord: x, yCord: y, occupied: false });\r\n        x++;\r\n    }\r\n    return boardArray;\r\n}\r\nexports.generateBoardArray = generateBoardArray;\r\nfunction ghostShip(shipLength, gridArray) {\r\n    for (let i = 0; i <= boardSetup_1.playerGrid.children.length - 1; i++) {\r\n        boardSetup_1.playerGrid.children[i].addEventListener(\"mouseover\", () => {\r\n            if (shipLength + gridArray[i].xCord >= 11) {\r\n                boardSetup_1.playerGrid.children[i].classList.add(\"cursor-not-allowed\");\r\n            }\r\n            else {\r\n                for (let j = 0; j < shipLength; j++) {\r\n                    boardSetup_1.playerGrid.children[i + j].classList.add(\"bg-neutral-600\");\r\n                }\r\n            }\r\n        });\r\n        boardSetup_1.playerGrid.children[i].addEventListener(\"mouseleave\", () => {\r\n            for (let j = 0; j < shipLength; j++) {\r\n                if (boardSetup_1.playerGrid.children[i + j]) {\r\n                    boardSetup_1.playerGrid.children[i + j].classList.remove(\"bg-neutral-600\");\r\n                }\r\n                else {\r\n                    boardSetup_1.playerGrid.children[i].classList.remove(\"bg-neutral-600\");\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\nfunction getMouseCord() {\r\n    for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {\r\n        boardSetup_1.playerGrid.children[i].addEventListener(\"mousedown\", () => {\r\n            if (boardSetup_1.playerGrid.children[i].classList.contains(\"cursor-not-allowed\"))\r\n                console.log(\"you dingus\");\r\n            else {\r\n                console.log(boardSetup_1.playerGrid.children[i].classList[0], boardSetup_1.playerGrid.children[i].classList[1]);\r\n            }\r\n        });\r\n    }\r\n}\r\ngetMouseCord();\r\nghostShip(4, exports.boardArray);\r\n\n\n//# sourceURL=webpack://battleShip/./src/gameBoardLogic.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\r\nconst gameBoardLogic_1 = __webpack_require__(/*! ./gameBoardLogic */ \"./src/gameBoardLogic.ts\");\r\nboardSetup_1.makeGrid;\r\n(0, gameBoardLogic_1.gameBoard)(gameBoardLogic_1.boardArray);\r\n\n\n//# sourceURL=webpack://battleShip/./src/index.ts?");

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