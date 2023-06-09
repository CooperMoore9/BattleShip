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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.makeGrid = void 0;\r\nconst playerGrid = document.getElementById(\"playerGrid\");\r\nconst playerDiv = document.getElementById(\"playerDiv\");\r\nconst botDiv = document.getElementById(\"botDiv\");\r\nbotDiv.style.visibility = \"hidden\";\r\nconst botGrid = document.getElementById(\"botGrid\");\r\nfunction makeGrid(input, container) {\r\n    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;\r\n    for (let i = 0; i < input * input; i++) {\r\n        const gridBox = document.createElement(\"div\");\r\n        gridBox.classList.add(`x${i % 10}`, `y${Math.floor((i / 10) % 10)}`, \"box\", \"border-2\", \"border-sky-800\");\r\n        gridBox.style.backgroundColor = \"white\";\r\n        gridBox.addEventListener(\"mouseover\", () => {\r\n            gridBox.style.backgroundColor = \"grey\";\r\n            //   let xCord = parseInt(gridBox.className.slice(1, 2).trim());\r\n            //   let yCord = parseInt(gridBox.className.slice(4, 5).trim());\r\n        });\r\n        gridBox.addEventListener(\"mouseleave\", () => {\r\n            gridBox.style.backgroundColor = \"white\";\r\n        });\r\n        container.appendChild(gridBox);\r\n    }\r\n}\r\nexports.makeGrid = makeGrid;\r\nfunction makeBotGrid() {\r\n    console.log(playerDiv.classList);\r\n    playerDiv.classList.replace(\"w-[99vw]\", \"w-[50vw]\");\r\n    botDiv.classList.replace(\"w-[0vw]\", \"w-[50vw]\");\r\n    botDiv.style.visibility = \"visible\";\r\n    makeGrid(10, botGrid);\r\n}\r\nfunction clearGrid() {\r\n    const deleteTheBoxes = document.querySelectorAll(\".box\");\r\n    deleteTheBoxes.forEach((div) => {\r\n        div.remove();\r\n    });\r\n}\r\nmakeGrid(10, playerGrid);\r\n// makeBotGrid();\r\n\n\n//# sourceURL=webpack://battleShip/./src/boardSetup.ts?");

/***/ }),

/***/ "./src/gameBoardLogic.ts":
/*!*******************************!*\
  !*** ./src/gameBoardLogic.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n// Factory Function for gameBoard\r\n// needs to be a factory function because im gonna need to make 2 per game\r\n// one for the player to place pieces and one for the player to click on to shoot at\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.gameBoard = void 0;\r\n// First things first, generate a grid?\r\n// be able to track every part of the board\r\n// make array that every index contains a  grid box\r\nlet playerGrid = document.querySelectorAll(\".box\");\r\nlet xCord = 0;\r\nlet yCord = 0;\r\nXCordListener();\r\nyCordListener();\r\nfunction XCordListener() {\r\n    playerGrid.forEach((box) => {\r\n        box.addEventListener(\"mousedown\", () => {\r\n            xCord = parseInt(box.className.slice(1, 2).trim());\r\n        });\r\n    });\r\n}\r\nfunction yCordListener() {\r\n    playerGrid.forEach((box) => {\r\n        box.addEventListener(\"mousedown\", () => {\r\n            yCord = parseInt(box.className.slice(4, 5).trim());\r\n            console.log(\"x\", xCord, \"y\", yCord);\r\n        });\r\n    });\r\n}\r\nfunction gameBoard() { }\r\nexports.gameBoard = gameBoard;\r\n\n\n//# sourceURL=webpack://battleShip/./src/gameBoardLogic.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst boardSetup_1 = __webpack_require__(/*! ./boardSetup */ \"./src/boardSetup.ts\");\r\nconst gameBoardLogic_1 = __webpack_require__(/*! ./gameBoardLogic */ \"./src/gameBoardLogic.ts\");\r\nboardSetup_1.makeGrid;\r\ngameBoardLogic_1.gameBoard;\r\n\n\n//# sourceURL=webpack://battleShip/./src/index.ts?");

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