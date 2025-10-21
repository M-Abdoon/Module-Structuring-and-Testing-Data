// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(5, 8)).toEqual(true);
  expect(isProperFraction(8, 5)).toEqual(false);
  expect(isProperFraction(1, 4)).toEqual(true);
  expect(isProperFraction(4, 1)).toEqual(false);
  expect(isProperFraction(1, 4)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper Fractions", () => {
  expect(isProperFraction(9, 4)).toEqual(false);
  expect(isProperFraction(4, 9)).toEqual(true);
  expect(isProperFraction(7, 3)).toEqual(false);
  expect(isProperFraction(3, 7)).toEqual(true);
  expect(isProperFraction(10, 2)).toEqual(false);
  expect(isProperFraction(2, 10)).toEqual(true);
});

// Case 3: Identify Negative Fractions:
test("should return false for a negative Fractions", () => {
  expect(isProperFraction(-6, 4)).toEqual(false);
  expect(isProperFraction(-4, 6)).toEqual(true);
  expect(isProperFraction(6, -4)).toEqual(false);
  expect(isProperFraction(4, -6)).toEqual(true);   
  expect(isProperFraction(-6, -4)).toEqual(false);
  expect(isProperFraction(-4, -6)).toEqual(true);  
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for an equal Fractions", () => {
  expect(isProperFraction(7, 7)).toEqual(false);
  expect(isProperFraction(10, 10)).toEqual(false);
  expect(isProperFraction(1, 1)).toEqual(false);
});