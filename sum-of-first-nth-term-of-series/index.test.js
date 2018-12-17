const SeriesSum = require("./index");

test("Should equal 0.00", () => {
  expect(SeriesSum(0)).toBe("0.00");
});
test("Should equal 1.00", () => {
  expect(SeriesSum(1)).toBe("1.00");
});
test("Should equal 1.25", () => {
  expect(SeriesSum(2)).toBe("1.25");
});
test("Should equal 1.39", () => {
  expect(SeriesSum(3)).toBe("1.39");
});
test("Should equal 1.49", () => {
  expect(SeriesSum(4)).toBe("1.49");
});
