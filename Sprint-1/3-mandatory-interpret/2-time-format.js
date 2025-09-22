const movieLength = 86399; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  There are 6 variable declarations.

// b) How many function calls are there?
//  There is only 1 function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//  this expression divided the movie length (is seconds) by 60 so we get how many minutes the movie length is.
//  but since we used % not / that means we only took the reminder left over after dividing the number.
//  so basically the code identifies how many seconds will be left over after getting the minutes amount.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//  it means that the result of this expression will be the total minutes of the video.
//  before that - in line 3 - it took the number of seconds left, and in line 4 it divides the 
//  movie length ( takes the remaining seconds out ) by 60 because a minute contains 60 seconds.
//  so it actually converts the seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//  The output of the variable result represents time (period of the movie).
//  it actually shows the result of converting seconds into readable time format.
//  Better to call it (ReadableMovieTime).

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//  It does work with most if the values, BUT if I put a number that's bigger than 86399, which returns: 23:59:59
//  that means it ignores the days, it can be mediated so it can count days, months and years.
//  I haven't watched a movie that is longer than a day but just in case :), I think the code should be kind of general sometimes!!
//  Also two zeros should be displayed if there're not hours or mins (when I put small numbers that are less that an hour), so it gets more understandable.
