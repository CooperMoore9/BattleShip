"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shipLogic_1 = require("./shipLogic");
let ship;
beforeEach(() => {
    ship = (0, shipLogic_1.createShip)(2, 2, false);
});
test("createShip", () => {
    expect((0, shipLogic_1.createShip)(2, 1, false)).toStrictEqual({
        length: 2,
        hitPoints: 1,
        sunk: false,
        chunks: expect.any(Object),
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
