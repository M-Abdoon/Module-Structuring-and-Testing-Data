
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// the error will occur because the parameter name is a number (3) which is not allowed.
// it should be a variable or empty.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number
//     at internalCompileFunction (node:internal/vm:73:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1274:20)
//     at Module._compile (node:internal/modules/cjs/loader:1320:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
//     at Module.load (node:internal/modules/cjs/loader:1197:32)
//     at Module._load (node:internal/modules/cjs/loader:1013:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v18.19.1
// =============> explain this error message here
// ther error message says that a number can not put as an input when declaring the function
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(5));
