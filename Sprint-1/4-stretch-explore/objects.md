## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
 log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
it shows information that look like variables and values, and starts with something like:
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
Console stores several functions inside it, functions like log(), assert(), debug() and more.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
`console.log` means that we want to use the function log() that is inside the object (native object) `console`. the dot . means is like navigating from the object to the function inside that object.
so `console.log` means "use the object `console`, then from the functions inside the object use log()".
