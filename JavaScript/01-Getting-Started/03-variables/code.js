// Using variables
const length = 120;
console.log(length + length);
console.log(length * length);
console.log(length - length);

// Declaring with let
let speed = 40;
speed = 56;
console.log(speed);

// Assignment vs Mutation
let fruits = ["Apple", "Banana", "Mango"];
fruits = ["Strawberry", "Blueberry"]; // assignment
console.log(fruits);

let cities = ["Paris", "London", "Chicago"];
cities[0] = "Tokyo"; // mutation
console.log(cities);

// Multiple variables
let length2, width2, height2;
const length3 = 120, width3 = 60, height3 = 40;
console.log(length3, width3, height3);

// Data types and typeof
let wish = "Hello World";
let age = 25;
let isAdmin = true;
console.log(typeof wish, typeof age, typeof isAdmin);

// Expressions
let sum = 23 + 45;
console.log(sum);

// Boolean comparisons
let numberValue = 9;
let stringValue = "9";
console.log(numberValue === stringValue); // false
console.log(numberValue == stringValue);  // true

// Naming best practices
const lengthOfBox = 120;
const lengthOfBoxWithUnit = "120cm";
let isUserAdmin = true;
console.log(lengthOfBox, lengthOfBoxWithUnit, isUserAdmin);