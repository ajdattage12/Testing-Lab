const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
} = require("./functions.js");

test("function should return 2", () => {
  expect(returnTwo()).toBe(2);
});

test("greeting should return 'Hello name'", () => {
  expect(greeting("James")).toEqual("Hello, James.");
});

describe("Math functions", () => {
  test("add should sum two numbers together", () => {
    expect(add(3, 2)).toEqual(5);
  });

  test("subtract should subtract two numbers", () => {
    expect(subtract(10, 3)).toEqual(7);
  });

  test("multiple should times two number together", () => {
    expect(multiply(5, 4)).toEqual(20);
  });

  test("divide will divide two numbers", () => {
    expect(divide(81, 9)).toEqual(9);
  });
});
