// Predict and explain first...
// the code should display the last digit of any number passed to the function.
// but there is an error which is the variable num is globally declared and has a value of 103.
// the function does not take any parameters, and it takes the global variable num which is always 103.
// that causes the code to always return 3 as 3 is the last digit of 103 which is the value of the global variable num.

// Predict the output of the following code:
// =============> Write your prediction here
// since 3 is the last digit of 103, I think the output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last digit of 42 is 3 ... the output is as I predicted.

// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// because the function getLastDigit does not take any parameters, and it uses the global variable num which is always 103.
// Finally, correct the code to fix the problem
// =============> write your new code here

// no need to declare the global variable num here. instead, we will pass it as a parameter to the function.
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// because the function does not take the parameter so it will always use the variable num which is always 103.