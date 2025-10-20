const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("Numbers that end with `st`", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(28491)).toEqual("28491st");
});

// Case 2: "Numbers that end with `nd`
test("Numbers that end with `nd`", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(202)).toEqual("202nd");
  expect(getOrdinalNumber(4502)).toEqual("4502nd");
}

// Case 3:: "Numbers that end with `rd`
);

test("Numbers that end with `rd`", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(43)).toEqual("43rd");
  expect(getOrdinalNumber(123)).toEqual("123rd");
  expect(getOrdinalNumber(6703)).toEqual("6703rd");
});

// Case 4: "Numbers that end with `th`
test("Numbers that end with `th`", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(25)).toEqual("25th");
  expect(getOrdinalNumber(1124)).toEqual("1124th");
  expect(getOrdinalNumber(9999)).toEqual("9999th");
});

// Case 5: "Numbers that are exceptions (11, 12, 13)
test("Numbers that are exceptions (11, 12, 13)", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

// Case 6: "Non-positive integers (NaN, Infinity, non-integers)

test("should throw an error stating that input must be a positive integer", () => {
    expect(() => getOrdinalNumber(NaN)).toThrow("Input must be a positive integer.");
    expect(() => getOrdinalNumber(Infinity)).toThrow("Input must be a positive integer.");
    expect(() => getOrdinalNumber("hello")).toThrow("Input must be a positive integer.");
    expect(() => getOrdinalNumber([0, 1, 2])).toThrow("Input must be a positive integer.");
});