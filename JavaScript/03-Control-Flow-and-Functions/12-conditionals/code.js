// Truthy and Falsy
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true

// if statement
const age = 15;
const votingAge = 18;

if (age < votingAge) {
  console.log("Person is not eligible to vote.");
}

// if with truthy value
const employee = { name: "Sam" };
if (employee.name) {
  console.log("Name of the employee is " + employee.name);
}

// if...else
const number = 5;
if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// if...else if
const num = -1;
if (num > 0) {
  console.log("Positive");
} else if (num === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// switch
const languageCode = "es";
switch (languageCode) {
  case "en":
    console.log("English");
    break;
  case "es":
    console.log("Spanish");
    break;
  case "fr":
    console.log("French");
    break;
  default:
    console.log("Unknown language");
}

// switch fall-through
const rollNumber = 5649;
switch (rollNumber) {
  case 8746:
  case 5649:
  case 3268:
  case 7901:
    console.log("Congratulations, you have passed the test!");
    break;
  default:
    console.log("Roll number not found.");
}

// Ternary operator
const num2 = 8;
const numberType = num2 % 2 === 0 ? "even" : "odd";
console.log(numberType);