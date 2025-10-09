// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("should identify Acute angle (less than 90°)", () => {
  expect(getAngleType(80)).toEqual("Acute angle");
});

test("should identify Obtuse angle (greater than 90° and less than 180 )", () => {
  expect(getAngleType(100)).toEqual("Obtuse angle");
});

test("should identify Straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify Reflex angle (greater than 180° and less than 360°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
});