/* 
"Go With the Code Flow"

Today we're going to get deeper down in thinking about code and workign out what order the computer sees it in.

Code Flow - Functions

A function is a series of instructions to accomplus a task.
Like a recipe. It has ingredients (parameters) and instructions (code block). IT DOES NOT RUN UNTIL YOU CALL IT BY NAME.
*/

var x = 5;

function setX(newValue) {
    x = newValue; // <--- code block
}

console.log(x);

// CALLING THE FUNCTION, INVOKING THE FUNCTION
setX(15);
console.log(x);