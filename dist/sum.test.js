"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shipLogic_1 = require("./shipLogic");
test("sum 1, 2", () => {
    expect((0, shipLogic_1.sum)(1, 2)).toBe(3);
});
test("createShip", () => {
    expect((0, shipLogic_1.createShip)(2, 1, false)).toStrictEqual({
        length: 2,
        timesHit: 1,
        sunk: false,
        hit: expect.any(Function),
    });
});
test("ship hit", () => {
    expect((0, shipLogic_1.createShip)(2, 1, false)).toStrictEqual({
        length: 2,
        timesHit: 1,
        sunk: false,
        hit: expect.any(Function),
    });
});
