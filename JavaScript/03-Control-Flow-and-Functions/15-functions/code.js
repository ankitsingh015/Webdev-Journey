// 1️⃣ Basic Function
function displayValidationError() {
  console.log("The user details are not valid.");
}
displayValidationError();

// 2️⃣ Function Expression
const showError = function() {
  console.log("Invalid input detected.");
};
showError();

// 3️⃣ Arrow Function
const displayValidationErrorArrow = () => {
  console.log("The user details are not valid.");
};
displayValidationErrorArrow();

// 4️⃣ Parameters and Arguments
const greet = (name) => console.log(`Welcome, ${name}!`);
greet("Alice");

// 5️⃣ Default Parameters
const displayValidationErrorDefault = (fieldName, message = "") => {
  console.log(`Invalid field: ${fieldName}. ${message}`);
};
displayValidationErrorDefault("email");
displayValidationErrorDefault("name", "Please enter a valid name.");

// 6️⃣ Return Statement
const calculateSum = (a, b, c, d) => a + b + c + d;
const totalMarks = calculateSum(81, 90, 72, 99);
console.log(totalMarks);

// 7️⃣ Guard Clause
const displayGreeting = (user) => {
  if (!user.name) return;
  console.log(`Hello, ${user.name}!`);
};
displayGreeting({ name: "John" });
displayGreeting({ name: "" });

// 8️⃣ Callback Function Example
const sumOrProduct = (num1, num2, operation, printResult) => {
  if (operation === "sum") {
    const result = num1 + num2;
    printResult(operation, result);
  } else if (operation === "product") {
    const result = num1 * num2;
    printResult(operation, result);
  } else {
    console.log("Invalid parameter");
  }
};

const printResult = (operation, result) => {
  console.log(`The solution to the ${operation} is ${result}.`);
};

sumOrProduct(3, 4, "sum", printResult);
sumOrProduct(6, 8, "product", printResult);
sumOrProduct(2, 5, "divide", printResult);

// 9️⃣ Anonymous Function Usage
const changeCityName = (cityName, makeChanges) => makeChanges(cityName);
const updatedCity = changeCityName("Tokyo", (city) => city.toUpperCase());
console.log(updatedCity);