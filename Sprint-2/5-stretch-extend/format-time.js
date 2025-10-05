// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = time.slice(0, 2);
  if (Number(hours) > 12) {
    hours = String(hours - 12);
    hours = hours.padStart(2, "0");

    return `${hours}:00 pm`;
  }
  return `${time} am`;
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
currentOutput = formatAs12HourClock("07:00");
targetOutput = "07:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
//==========================
currentOutput = formatAs12HourClock("00:00");
targetOutput = "00:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
//==========================
currentOutput = formatAs12HourClock("20:00");
targetOutput = "08:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
