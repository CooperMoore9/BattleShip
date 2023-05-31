"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShip = void 0;
// What do
// ships have length, times hit, if its sunk
// ships have functions that add to times hit (if hit is valid)
// Ships track each chuck
// chuck = each segment of the ship that can be hit
// each chunk tracks if its been hit
function createShip(length, hitPoints, sunk) {
    return {
        length: length,
        hitPoints: hitPoints,
        sunk: sunk,
        chucks: generateChunks(length),
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
    let chucksArr = [];
    for (let i = 0; i != length; i++) {
        chucksArr.push({ segment: i, isHit: false });
    }
    return chucksArr;
}
let ship1 = createShip(2, 2, false);
ship1.hit();
ship1.hit();
ship1.isSunk();
// console.log(ship1.chucks);
console.log(ship1);
