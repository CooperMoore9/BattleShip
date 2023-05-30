"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script1_1 = require("./script1");
test("sum 1, 2", () => {
    expect((0, script1_1.sum)(1, 2)).toBe(3);
});
test("product", () => {
    expect((0, script1_1.product)(4, 4)).toBe(16);
});
