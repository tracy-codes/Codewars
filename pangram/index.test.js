const isPangram = require("./index");

test("Is a pangram", () => {
  expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(true);
});

test("Is not a pangram", () => {
  expect(isPangram("This is not a pangram")).toBe(false);
});
