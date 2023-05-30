import { sum, product } from "./script1";

test("sum 1, 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("product", () => {
  expect(product(4, 4)).toBe(16);
});
