import { sum, createShip } from "./script1";

test("sum 1, 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("createShip", () => {
  expect(createShip(2, 1, false)).toStrictEqual({
    length: 2,
    timesHit: 1,
    sunk: false,
  });
});
