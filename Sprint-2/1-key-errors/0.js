// Predict and explain first...
// The code has a function that is supposed to capitalise the string passed to it. (only the first letter)
// the string will be stored in the variable str and the function will return its value.
// it takes the first letter (str[0]) and uses toUpperCase() method to capitalise it.
// the str.slice(1) method is used to show the letter.
// 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
function capitalise(str) {
}

// =============> write your explanation here
// an error occured because the variable str was already declared as a parameter of the function so
// there was no need to use let again.


// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));