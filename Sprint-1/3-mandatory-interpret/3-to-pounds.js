const penceString = "105p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2.
// 3. const penceStringWithoutTrailingP = penceString.substring( : declares new var and assigns the pence string excluding trailing p
// 4.   0, : first value of the function, this is to tell the function to start from the first charachtar in the string
// 5.   penceString.length - 1 : second value of the funtion, it takes the string lengs mines 1 (to exclude trailing p)
// 6. ); : closed th funtion.
// 7. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); : it padds the number with 0 from the start (to make number readable and clear)
// 8. const pounds = paddedPenceNumberString.substring( : declares new variable to store pounds, it takes the last two numbers from the number and stores everything that is before the last two numbers because they are pence not pounds.
// 9.   0, : set 0 to start from the first character. 
// 10.   paddedPenceNumberString.length - 2 : here is where it excludes the last two numbers (the pence).
// 11. ); : closes function.
// 12.
// 13. const pence = paddedPenceNumberString : declares new var to store pence
// 14.   .substring(paddedPenceNumberString.length - 2) : identifies the last two numbers (pence) and stores them.
// 15.   .padEnd(2, "0"); : to pad the pence with 0 from the end
// 16.
// 17. console.log(`£${pounds}.${pence}`); : to write the result, it prints the two variables, pounds and pence. it adds £ to show that it's pound.



