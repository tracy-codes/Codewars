const rowSumOddNumbers = require("./index");

test("Sum should be equal to 1", () => {
  expect(rowSumOddNumbers(1)).toBe(1);
});
test("Sum should be equal to 74088", () => {
  expect(rowSumOddNumbers(42)).toBe(74088);
});
