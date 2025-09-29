const minimum = 1;
const maximum = 100;

num = Math.floor(Math.random() * (maximum - minimum) + 1);

//console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// 1. const minimum = 1; : a variable has the name `minimum` declared. it stores hte 1 value. `const` means this var is unchangeable.
// 2. const maximum = 100; a variable has the name `maximum` declared. it stores hte 100 value. `const` means this var is unchangeable.
// 4. num = Math.floor(Math.random() * (maximum - minimum) + 1); : in this line, the variable `num` is declared, it stores a random number
// between 1 and 100. Math.random() generates a random decimal number between 0 and 1 (exclusive).
// then it multiplies this random number by (maximum - minimum) to scales it to a range between 0 and 99 (since maximum is 100 and minimum is 1).
// Adding 1 shifts this range to be between 1 and 100.
// Math.floor() then rounds down the result number to the nearest whole number, and ensures that num is an integer between 1 and 100.

// So the whole code generates a random integer between 1 and 100 (inclusive) and stores it in the variable num.