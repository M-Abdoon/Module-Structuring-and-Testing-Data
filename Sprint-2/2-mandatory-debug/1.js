// Predict and explain first...
//  =============> write your prediction here
// the function will throw an error because it does not return any value, the use of return without passing any value will cause an error.
// also the last line of the function is unreachable because it comes after the return statement.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function will not return the expected sum because the return statement is not followed by any value.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);