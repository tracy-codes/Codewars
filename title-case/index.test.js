const titleCase = require("./index");

test('Should return ""', () => {
  expect(titleCase("")).toEqual("");
});

test('Should return "A Clash of Kings"', () => {
  expect(titleCase("a clash of KINGS", "a an the of")).toEqual(
    "A Clash of Kings"
  );
});

test('Should return "The Wind in the Willows"', () => {
  expect(titleCase("THE WIND IN THE WILLOWS", "The In")).toEqual(
    "The Wind in the Willows"
  );
});

test('The Quick Brown Fox"', () => {
  expect(titleCase("the quick brown fox")).toEqual("The Quick Brown Fox");
});
