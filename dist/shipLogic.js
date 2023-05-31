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
        hit() {
            return this.timesHit++;
        },
        isSunk() {
            return this.timesHit >= this.length ? true : false;
        },
    };
}
exports.createShip = createShip;
let ship1 = createShip(2, 0, false);
ship1.hit();
console.log(ship1);
console.log(ship1.isSunk());
