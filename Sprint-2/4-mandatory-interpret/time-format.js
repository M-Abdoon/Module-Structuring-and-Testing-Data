function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// The function pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// the value is 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// # The Python visualizer stops working when it runs pad because (padStart is not a function), maybe because it uses ES6 version of javascript!
// The return value of pad when it's called for the first time is 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//the value assigned to num is 1 . the value 1 is the number of the remaining seconds, pad() converted it to 01 

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// the return value is 01 . the function pad() converted num (which values 1) to 01 so the seconds can be readable easily.