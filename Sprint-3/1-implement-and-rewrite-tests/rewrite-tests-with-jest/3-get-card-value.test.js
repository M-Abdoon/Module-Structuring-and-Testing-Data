// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the number entered as input", () => {
  const numberCards = getCardValue("4♠");
  expect(numberCards).toEqual(4);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards J Q K", () => {
  const faceCards = getCardValue("Q♠");
  expect(faceCards).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 after entering Ace A", () => {
  const handleAce = getCardValue("A♠");
  expect(handleAce).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test(`should return string ("Invalid card rank.") for invalid inputs`, () => {
  const invalidCards = getCardValue("HelloWorld!");
  expect(invalidCards).toEqual("Invalid card rank.");
});
