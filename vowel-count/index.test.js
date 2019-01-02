const functions = require("./index");

test("Counts vowels in string and returns true", () => {
  expect(functions.getCount("this is a string that contains vowels")).toEqual(
    10
  );
});
