const isIsogram = require("./index");

test('"Dermatoglyphics" is an isogram', () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true);
});

test('"isogram" is an isogram', () => {
  expect(isIsogram("isogram")).toBe(true);
});

test('"aba" is not an isogram.', () => {
  expect(isIsogram("aba")).toBe(false);
});

test('"moOse is not an isogram', () => {
  expect(isIsogram("moOse")).toBe(false);
});

test('"isIsogram" is not an isogram', () => {
  expect(isIsogram("isIsogram")).toBe(false);
});

test('"" is an isogram', () => {
  expect(isIsogram("")).toBe(true);
});
