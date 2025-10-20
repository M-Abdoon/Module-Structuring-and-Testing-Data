const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
});

// Case 2: Identify the ordinal number for 1
// except those ending in 12
test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
    expect( getOrdinalNumber(2) ).toEqual("2nd");
    expect( getOrdinalNumber(22) ).toEqual("22nd");
    expect( getOrdinalNumber(132) ).toEqual("132nd");
});

// Case 3: Identify the ordinal numbers for 3 to 12
test("should return correct ordinal suffixes for numbers 3 to 12", () => {
    expect( getOrdinalNumber(3) ).toEqual("3rd");
    expect( getOrdinalNumber(4) ).toEqual("4th");
    expect( getOrdinalNumber(5) ).toEqual("5th");
    expect( getOrdinalNumber(6) ).toEqual("6th");
    expect( getOrdinalNumber(7) ).toEqual("7th");
    expect( getOrdinalNumber(8) ).toEqual("8th");
    expect( getOrdinalNumber(9) ).toEqual("9th");
    expect( getOrdinalNumber(10) ).toEqual("10th");
    expect( getOrdinalNumber(11) ).toEqual("11th");
    expect( getOrdinalNumber(12) ).toEqual("12th");
});
// Case 4: Identify the ordinal numbers for numbers above 12
test("should return correct ordinal suffixes for numbers above 12", () => {
    expect( getOrdinalNumber(13) ).toEqual("13th");
    expect( getOrdinalNumber(19) ).toEqual("19th");
    expect( getOrdinalNumber(23) ).toEqual("23rd");
    expect( getOrdinalNumber(34) ).toEqual("34th");
    expect( getOrdinalNumber(45) ).toEqual("45th");
    expect( getOrdinalNumber(56) ).toEqual("56th");
    expect( getOrdinalNumber(67) ).toEqual("67th");
});

// Case 5: Identify the ordinal numbers for numbers like 20 30 40 etc
test("should return correct ordinal suffixes for multiples of ten", () => {
    expect( getOrdinalNumber(20) ).toEqual("20th");
    expect( getOrdinalNumber(30) ).toEqual("30th");
    expect( getOrdinalNumber(70) ).toEqual("70th");
    expect( getOrdinalNumber(50) ).toEqual("50th");
});

// Case 6: dealing with big numbers
test("should return correct ordinal suffixes for big numbers", () => {
    expect( getOrdinalNumber(111) ).toEqual("111th");
    expect( getOrdinalNumber(4712) ).toEqual("4712th");
    expect( getOrdinalNumber(10003) ).toEqual("10003rd");
    expect( getOrdinalNumber(10012) ).toEqual("10012th");
});


// Case 6: dealing with invalid inputs
// test("should return error message", () => {
//     expect( getOrdinalNumber(NaN) ).toEqual("Input must be a positive integer.");
//     expect( getOrdinalNumber(Infinity) ).toEqual("Input must be a positive integer.");
//     expect( getOrdinalNumber("hello") ).toEqual("Input must be a positive integer.");
//     expect( getOrdinalNumber([0, 3]) ).toEqual("Input must be a positive integer.");
// });

test("should throw an error stating that input must be a positive integer", () => {
    expect(() => getOrdinalNumber(NaN)).toThrow("Input must be a positive integer.");
    expect(() => getOrdinalNumber(Infinity)).toThrow("Input must be a positive integer.");
    expect(() => getOrdinalNumber("hello")).toThrow("Input must be a positive integer.");
    expect(() => getOrdinalNumber([0, 1, 2])).toThrow("Input must be a positive integer.");
});