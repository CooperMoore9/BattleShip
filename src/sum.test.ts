import { sum, createShip } from "./shipLogic";
import { Ship } from "./types";

test("sum 1, 2", () => {
  expect(sum(1, 2)).toBe(3);
});

let ship: Ship;
beforeEach(() => {
  ship = createShip(2, 0, false);
});

test("createShip", () => {
  expect(createShip(2, 1, false)).toStrictEqual({
    length: 2,
    timesHit: 1,
    sunk: false,
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});

test("ship hit", () => {
  ship.hit();
  expect(ship.timesHit).toBe(1);
});
