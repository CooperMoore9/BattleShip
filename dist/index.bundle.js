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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.makeGrid = exports.playerGrid = void 0;\nexports.playerGrid = document.getElementById(\"playerGrid\");\nconst playerDiv = document.getElementById(\"playerDiv\");\nconst botDiv = document.getElementById(\"botDiv\");\nbotDiv.style.visibility = \"hidden\";\nconst botGrid = document.getElementById(\"botGrid\");\nfunction makeGrid(input, container) {\n    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;\n    for (let i = 0; i < input * input; i++) {\n        const gridBox = document.createElement(\"div\");\n        gridBox.classList.add(`x${i % 10}`, `y${Math.floor((i / 10) % 10)}`, \"box\", \"border-2\", \"border-sky-800\");\n        container.appendChild(gridBox);\n    }\n}\nexports.makeGrid = makeGrid;\nfunction makeBotGrid() {\n    console.log(playerDiv.classList);\n    playerDiv.classList.replace(\"w-[99vw]\", \"w-[50vw]\");\n    botDiv.classList.replace(\"w-[0vw]\", \"w-[50vw]\");\n    botDiv.style.visibility = \"visible\";\n    makeGrid(10, botGrid);\n}\nfunction clearGrid() {\n    const deleteTheBoxes = document.querySelectorAll(\".box\");\n    deleteTheBoxes.forEach((div) => {\n        div.remove();\n    });\n}\nmakeGrid(10, exports.playerGrid);\n// makeBotGrid(); !IMPORTANT\n\n\n//# sourceURL=webpack://battleShip/./src/boardSetup.ts?");

/***/ }),

/***/ "./src/gameBoardLogic.ts":
/*!*******************************!*\
  !*** ./src/gameBoardLogic.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// Factory Function for gameBoard\n// needs to be a factory function because im gonna need to make 2 per game\n// one for the player to place pieces and one for the player to click on to shoot at\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.generateBoardArray = exports.gameBoard = exports.boardArray = void 0;\n// First things first, generate a grid?\n// be able to track every part of the board\n// make array that every index contains a  grid box\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\nexports.boardArray = generateBoardArray();\nfunction gameBoard(gridArray) {\n    function updateGameBoard() {\n        gridArray.forEach((element) => {\n            if (element.occupied === true) {\n                let boardSection = boardSetup_1.playerGrid.children[parseInt(`${element.yCord}${element.xCord}`)];\n                boardSection.classList.add(\"bg-black\");\n            }\n        });\n    }\n    function placeShip(x, y, length) {\n        for (let i = 0; i < length; i++) {\n            gridArray[parseInt(`${y}${x}`)].occupied = true;\n            x++;\n        }\n    }\n    // placeShip(6, 5, 4);\n    // placeShip(3, 2, 3);\n    // updateGameBoard();\n    // console.log(gridArray);\n}\nexports.gameBoard = gameBoard;\n// 0-9 for x, when x reaches 9 iterate y by 1\nfunction generateBoardArray() {\n    let boardArray = [];\n    let x = 0;\n    let y = 0;\n    for (let i = 1; i < 100; i++) {\n        if (x === 10) {\n            x = 0;\n            y++;\n        }\n        boardArray.push({ xCord: x, yCord: y, occupied: false });\n        x++;\n    }\n    return boardArray;\n}\nexports.generateBoardArray = generateBoardArray;\nfunction ghostShip(shipLength, gridArray) {\n    for (let i = 0; i <= boardSetup_1.playerGrid.children.length; i++) {\n        boardSetup_1.playerGrid.children[i].addEventListener(\"mouseover\", () => {\n            boardSetup_1.playerGrid.children[i].classList.add(\"bg-neutral-600\");\n            for (let j = 0; j < shipLength; j++) {\n                if (shipLength + gridArray[i].xCord >= 11) {\n                    boardSetup_1.playerGrid.children[i].classList.add(\"cursor-not-allowed\");\n                    console.log(\"bad\");\n                }\n                else {\n                    boardSetup_1.playerGrid.children[i + j].classList.add(\"bg-neutral-600\");\n                }\n            }\n        });\n        boardSetup_1.playerGrid.children[i].addEventListener(\"mouseleave\", () => {\n            boardSetup_1.playerGrid.children[i].classList.remove(\"bg-neutral-600\");\n            for (let j = 0; j < shipLength; j++) {\n                boardSetup_1.playerGrid.children[i + j].classList.remove(\"bg-neutral-600\");\n            }\n        });\n    }\n}\nfunction getMouseCord() {\n    for (let i = 0; i < boardSetup_1.playerGrid.children.length; i++) {\n        boardSetup_1.playerGrid.children[i].addEventListener(\"mousedown\", () => {\n            console.log(boardSetup_1.playerGrid.children[i].classList[0], boardSetup_1.playerGrid.children[i].classList[1]);\n        });\n    }\n}\nghostShip(4, exports.boardArray);\ngetMouseCord();\nconsole.log(parseInt(boardSetup_1.playerGrid.children[45].classList[0].slice(1)));\n\n\n//# sourceURL=webpack://battleShip/./src/gameBoardLogic.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\nconst gameBoardLogic_1 = __webpack_require__(/*! ./gameBoardLogic */ \"./src/gameBoardLogic.ts\");\nboardSetup_1.makeGrid;\n(0, gameBoardLogic_1.gameBoard)(gameBoardLogic_1.boardArray);\n\n\n//# sourceURL=webpack://battleShip/./src/index.ts?");

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