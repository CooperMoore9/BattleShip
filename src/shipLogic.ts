export function sum(a: number, b: number) {
  return a + b;
}

export function createShip(length: number, timesHit: number, sunk: boolean) {
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

let ship1 = createShip(2, 0, false);
ship1.hit();

console.log(ship1);
console.log(ship1.isSunk());
