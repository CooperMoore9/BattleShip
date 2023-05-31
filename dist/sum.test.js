"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shipLogic_1 = require("./shipLogic");
test("sum 1, 2", () => {
    expect((0, shipLogic_1.sum)(1, 2)).toBe(3);
});
let ship;
beforeEach(() => {
    ship = (0, shipLogic_1.createShip)(2, 0, false);
});
test("createShip", () => {
    expect((0, shipLogic_1.createShip)(2, 1, false)).toStrictEqual({
        length: 2,
        timesHit: 1,
        sunk: false,
        hit: expect.any(Function),
        isSunk: expect.any(Function),
        sinkShip: expect.any(Function),
    });
});
test("ship hit", () => {
    ship.hit();
    expect(ship.timesHit).toBe(1);
});
test("isSunk 1", () => {
    ship.hit();
    expect(ship.sunk).toBe(false);
});
test("isSunk 2", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
