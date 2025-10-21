// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the number entered as input", () => {
  for (let i = 2; i <= 10; i++) {
  expect(getCardValue(`${i}♠`)).toEqual(i);
  }
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards J Q K", () => {
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 when entering Ace A", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test(`should return string ("Invalid card rank.") for invalid inputs`, () => {
  expect(getCardValue("HelloWorld!")).toEqual("Invalid card rank.");
  expect(getCardValue("♠")).toEqual("Invalid card rank.");
  expect(getCardValue("979")).toEqual("Invalid card rank.");
  expect(getCardValue("1")).toEqual("Invalid card rank.");
  expect(getCardValue([1, 2, 3])).toEqual("Invalid card rank.");
});
