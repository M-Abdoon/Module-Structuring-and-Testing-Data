// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper Fractions", () => {
  expect(isProperFraction(9, 4)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative Fractions", () => {
  expect(isProperFraction(-6, 4)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for an equal Fractions", () => {
  expect(isProperFraction(7, 7)).toEqual(false);
});