import { createShip } from "./shipLogic";
import { Ship } from "./types";

let ship: Ship;
beforeEach(() => {
  ship = createShip(2, 2, false);
});

test("createShip", () => {
  expect(createShip(2, 1, false)).toStrictEqual({
    length: 2,
    hitPoints: 1,
    sunk: false,
    chunks: expect.arrayContaining([
      expect.objectContaining({ isHit: false, segment: 1 }),
    ]),
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});

test("ship hit", () => {
  ship.hit();
  expect(ship.hitPoints).toBe(1);
});

test("isSunk 1", () => {
  ship.hit();
  expect(ship.sunk).toBe(false);
});

test("isSunk 2", () => {
  ship.hit();
  ship.hit();
  ship.isSunk();
  expect(ship.isSunk()).toBe(true);
});
