// What do
// ships have length, times hit, if its sunk
// ships have functions that add to times hit (if hit is valid)
// Ships track each chuck
// chuck = each segment of the ship that can be hit
// each chunk tracks if its been hit

import { check } from "prettier";
import { Ship } from "./types";

export function createShip(length: number, hitPoints: number, sunk: boolean) {
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

export function generateChunks(length: number) {
  let chunksArr = [];
  for (let i = 1; i <= length; i++) {
    chunksArr.push({ segment: i, isHit: false });
  }
  return chunksArr;
}

export function hitChunk(ship: Ship, segment: number) {
  return (ship.chunks[segment].isHit = true);
}

export function checkChunks(ship: Ship) {
  for (let i = 0; i <= ship.length - 1; i++) {
    if (ship.chunks[i].isHit === false) {
      return false;
    }
  }
  return true;
}

// let ship1 = createShip(2, 2, false);
// ship1.hit();
// ship1.hit();
// ship1.isSunk();
// ship1.chunks[0].isHit = true;
// ship1.chunks[1].isHit = false;

// console.log(checkChunks(ship1));

// console.log(ship1.chunks);
// console.log(ship1.chunks[1].segment);
