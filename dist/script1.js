"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShip = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function createShip(length, timesHit, sunk) {
    return {
        length: length,
        timesHit: timesHit,
        sunk: sunk,
    };
}
exports.createShip = createShip;
