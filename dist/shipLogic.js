"use strict";
// What do
// ships have length, times hit, if its sunk
// ships have functions that add to times hit (if hit is valid)
// Ships track each chuck
// chuck = each segment of the ship that can be hit
// each chunk tracks if its been hit
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkChunks = exports.hitChunk = exports.generateChunks = exports.createShip = void 0;
function createShip(length, hitPoints, sunk) {
    return {
        length: length,
        hitPoints: hitPoints,
        sunk: sunk,
        chunks: generateChunks(length),
        hit() {
            this.hitPoints--;
        },
        isSunk() {
            return this.hitPoints <= 0 ? (this.sunk = true) : (this.sunk = false);
        },
    };
}
exports.createShip = createShip;
function generateChunks(length) {
    let chunksArr = [];
    for (let i = 1; i <= length; i++) {
        chunksArr.push({ segment: i, isHit: false });
    }
    return chunksArr;
}
exports.generateChunks = generateChunks;
function hitChunk(ship, segment) {
    return (ship.chunks[segment].isHit = true);
}
exports.hitChunk = hitChunk;
function checkChunks(ship) {
    for (let i = 0; i <= ship.length - 1; i++) {
        if (ship.chunks[i].isHit === false) {
            return false;
        }
    }
    return true;
}
exports.checkChunks = checkChunks;
