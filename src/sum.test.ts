import { sum, createShip } from "./shipLogic";

test("sum 1, 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("createShip", () => {
  expect(createShip(2, 1, false)).toStrictEqual({
    length: 2,
    timesHit: 1,
    sunk: false,
    hit: expect.any(Function),
  });
});

test("ship hit", () => {
  expect(createShip(2, 1, false)).toStrictEqual({
    length: 2,
    timesHit: 1,
    sunk: false,
    hit: expect.any(Function),
  });
});
