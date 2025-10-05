function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12)
  {
    return `${Number(time.slice(0, 2) - 12)}:00 pm`;
  }
  return `${time} am`;
}

let targetOutPut = "2:00 pm";
let currentOutPut= formatAs12HourClock("14:00");

console.assert(
  targetOutPut === currentOutPut,
  `current output: ${currentOutPut}, target output: ${targetOutPut}`
);
// =========
targetOutPut = "11:00 am";
currentOutPut= formatAs12HourClock("11:00");

console.assert(
  currentOutPut === targetOutPut,
  `Error,, current is ${currentOutPut} and target is ${targetOutPut}`
);