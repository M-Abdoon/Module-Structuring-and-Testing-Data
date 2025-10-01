// Predict and explain first...
// the code is supposed to convert a decimal number to percentage by multiplying 
// the decimal Number by 100 then add the sign % to show that it is a percentage

// Why will an error occur when this program runs?
// =============> write your prediction here
// an error will occur because the variable decimalNumber is redeclared inside the function.
// it's already declared as a parameter of the function, so redeclaring it with const causes a syntax error.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// the fucntion convertToPercentage has a parameter named decimalNumber,
// but inside the function, there is a line that tries to declare a new constant with the same name decimalNumber.
// there is no need to redeclare the variable or edit it since it is a user input.
// also the variable decimalNumber is called from outside the function which menas from another scope.
// that is wrong because the variable can only be used inside the fucntion. instead of that we need to call the funtion, not hte variable.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.3));