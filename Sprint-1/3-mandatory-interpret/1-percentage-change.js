let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// -) functions called are:
// Number()     ||| carPrice = Number(carPrice.replaceAll(",", ""));
// Number()     ||| priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// replaceAll() ||| carPrice = Number(carPrice.replaceAll(",", ""));
// replaceAll() ||| priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// console.log()||| console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line: 5.
// This error is occurring because a , is missing inside the replaceAll() so the two inputs aren't separated.
// I will fix this error by adding , after the first input inside replaceAll()
// replaceAll("," "")   Changed to >>
// replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
// Line 4
// Line 5

// d) Identify all the lines that are variable declarations
// Line 1
// Line 2
// Line 7
// Line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// it replaces the , that is inside the number with nothing ( removes the , from the number)
