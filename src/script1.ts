export function sum(a: number, b: number) {
  return a + b;
}

export function createShip(length: number, timesHit: number, sunk: boolean) {
  return {
    length: length,
    timesHit: timesHit,
    sunk: sunk,
  };
}
