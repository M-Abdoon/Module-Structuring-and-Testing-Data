// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  let minutes= time.slice(3, 5);
  let timeIndicator;

  if (hours >= 12) {
    hours = hours - 12;
    timeIndicator = "pm";
  } else {
    timeIndicator = "am";
  }
  if ( hours === 0)
    hours = 12;

  return `${String(hours).padStart(2, "0")}:${minutes} ${timeIndicator}`;
}

let currentOutput = formatAs12HourClock("14:00");
let targetOutput = "02:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
//==========================
currentOutput = formatAs12HourClock("23:00");
targetOutput = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
//==========================
currentOutput = formatAs12HourClock("07:51");
targetOutput = "07:51 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
//==========================
currentOutput = formatAs12HourClock("00:37");
targetOutput = "12:37 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
//==========================
currentOutput = formatAs12HourClock("12:37");
targetOutput = "12:37 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
//==========================
currentOutput = formatAs12HourClock("20:59");
targetOutput = "08:59 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
