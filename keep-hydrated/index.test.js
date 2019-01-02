const litres = require("./index");

test("should return 1 litre", () => {
  expect(litres(2)).toEqual(1);
});
test("should return 0 litres", () => {
  expect(litres(1.5)).toEqual(0);
});
test("should return 6 litres", () => {
  expect(litres(12.3)).toEqual(6);
});
test("should return 0 litres", () => {
  expect(litres(0.82)).toEqual(0);
});
test("should return 5 litres", () => {
  expect(litres(11.8)).toEqual(5);
});
test("should return 893 litres", () => {
  expect(litres(1787)).toEqual(893);
});
test("should return 0 litres", () => {
  expect(litres(0)).toEqual(0);
});
