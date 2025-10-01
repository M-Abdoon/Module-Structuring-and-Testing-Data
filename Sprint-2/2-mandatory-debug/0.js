// Predict and explain first...
// =============> write your prediction here
// this code will use the declared function multiplay (a, b) to multiply two numbers, 10 and 32, and print the result to the console. 
// However, the function can not be used to get the result because it does not return any value. Instead, it only logs the result to the console.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// the function does not return any value, it only prints the result to the console, so it can't be used to return anything, it will return "undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);