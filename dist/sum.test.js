"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script1_1 = require("./script1");
test("sum 1, 2", () => {
    expect((0, script1_1.sum)(1, 2)).toBe(3);
});
test("createShip", () => {
    expect((0, script1_1.createShip)(2, 1, false)).toStrictEqual({
        length: 2,
        timesHit: 1,
        sunk: false,
    });
});
