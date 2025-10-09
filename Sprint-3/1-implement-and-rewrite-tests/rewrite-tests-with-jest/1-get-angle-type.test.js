// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify Acute angle (less than 90°)", () => {
  expect(getAngleType(80)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify Obtuse angle (greater than 90° and less than 180 )", () => {
  expect(getAngleType(100)).toEqual("Obtuse angle");
});
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify Straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify Reflex angle (greater than 180° and less than 360°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
});