"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shipLogic_1 = require("./shipLogic");
let ship;
beforeEach(() => {
    ship = (0, shipLogic_1.createShip)(2, 2, false);
});
// ======================= createShip Function Test(s) Below =======================
// also tests if generateChunks is working, don't feel like separating them ¯\_(ツ)_/¯
test("createShip", () => {
    expect((0, shipLogic_1.createShip)(2, 1, false)).toStrictEqual({
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
// ======================= hit Function Test(s) Below =======================
test("ship hit", () => {
    ship.hit();
    expect(ship.hitPoints).toBe(1);
});
test("ship hit 2", () => {
    ship.hit();
    ship.hit();
    expect(ship.hitPoints).toBe(0);
});
// ======================= isSunk Function Test(s) Below =======================
test("isSunk 1", () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});
test("isSunk 2", () => {
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.isSunk()).toBe(true);
});
// ======================= hitChunk Function Test(s) Below =======================
test("isHit", () => {
    (0, shipLogic_1.hitChunk)(ship, 0);
    expect(ship.chunks[0].isHit).toBe(true);
});
test("isHit different segment", () => {
    (0, shipLogic_1.hitChunk)(ship, 1);
    expect(ship.chunks[1].isHit).toBe(true);
});
// ======================= checkChunks Function Test(s) Below =======================
test("checkChunks", () => {
    expect((0, shipLogic_1.checkChunks)(ship)).toBe(false);
});
test("checkChunks first segment", () => {
    ship.chunks[0].isHit = true;
    expect((0, shipLogic_1.checkChunks)(ship)).toBe(false);
});
test("checkChunks second segment", () => {
    ship.chunks[1].isHit = true;
    expect((0, shipLogic_1.checkChunks)(ship)).toBe(false);
});
test("checkChunks all segments", () => {
    ship.chunks[0].isHit = true;
    ship.chunks[1].isHit = true;
    expect((0, shipLogic_1.checkChunks)(ship)).toBe(true);
});
// ======================= generateBoardArray Function Test(s) Below =======================
