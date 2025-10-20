function getOrdinalNumber(num) {
  if (typeof num !== "number" || num <= 0) {
    return "Input must be a positive integer.";
  }
  
  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
  return num;  
}

console.log(getOrdinalNumber(21));    // "1st"
module.exports = getOrdinalNumber;
