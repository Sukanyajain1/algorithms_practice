
// JS Variables and DataTypes - What are they even?

// Naming variables
// Camel case is the convention we use in JS
// 1. You can't start with a number
// 2. No spaces
// 3. No dashes

// Variable creation is with the keyword var
// Following keyword, name the variable
// Assign a value to it with the assignment operator

var smoothie = 'banana mango spinach';

// Primitive data types

// Strings - strings of characters bookended by quotes
var myName = "Sukanya";
var surName = "Jain";

// String concatenation
var fullName = myName + " " + surName;

console.log(myName);
console.log(surName);
console.log(fullName);


// Numbers - numbers are numbers. JS doesn't discriminate between integers and floating point nubmers. They are both the same data type to JS.

var age = 25;
var grade = 99.9;

// Mathematical operators - Plus +, minus -, multiplication *, division /

// Booleans - can only have one of two values - true or false

var isRaining = false;

// Lesson 2 - Predit Loops

// For loop
// Four things for a for loop
// 1. Name a sentry
// 2. Where it starts
// 3. Where it stops
// 4. How it changes

for (var i = 0; i < 10; i++){
    console.log(i);
    i=i+3;
}

console.log("outside of the loop " + i);