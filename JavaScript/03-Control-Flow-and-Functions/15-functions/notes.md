# Functions in JavaScript

A **function** is a block of reusable code that performs a specific task.  
Functions help make code modular, readable, and maintainable.

---

## 1️⃣ What is a Function?

Functions let you group related statements together to perform a task.

### Example – Without a Function

```javascript
const price1 = 20, qty1 = 2;
const price2 = 15, qty2 = 3;

const cost1 = price1 * qty1;
const cost2 = price2 * qty2;

console.log(cost1, cost2);
````

This works, but it’s repetitive. Let’s use a function.

### Example – With a Function

```javascript
function calculateItemCost(price, quantity) {
  return price * quantity;
}

const cost1 = calculateItemCost(20, 2);
const cost2 = calculateItemCost(15, 3);

console.log(cost1, cost2);
```

✅ The logic is reusable and clean.

---

## 2️⃣ Defining and Calling a Function

A function is defined using the `function` keyword:

```javascript
function displayValidationError() {
  console.log("The user details are not valid.");
}
```

To execute a function, call it with parentheses:

```javascript
displayValidationError(); // Function call (invocation)
```

---

## 3️⃣ Function Expressions

We can assign a function to a variable.

```javascript
const displayValidationError = function() {
  console.log("The user details are not valid.");
};
```

✅ This is called a **function expression**, and since the function has no name, it’s an **anonymous function**.

---

## 4️⃣ Arrow Functions

Arrow functions are a more modern syntax.

```javascript
const displayValidationError = () => {
  console.log("The user details are not valid.");
};
```

✅ Arrow functions are cleaner and preferred in most cases.

---

## 5️⃣ Parameters and Arguments

Parameters are placeholders for values a function can receive.

```javascript
const greet = (message) => {
  console.log(message);
};

greet("Welcome!"); // "Welcome!" is the argument
```

We can pass multiple arguments:

```javascript
const showDetails = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};

showDetails("Alice", 25);
```

---

## 6️⃣ Default Parameters

We can set a default value for parameters if none are provided.

```javascript
const displayValidationError = (fieldName, message = "") => {
  console.log(`Invalid field: ${fieldName}. ${message}`);
};

displayValidationError("email");
displayValidationError("name", "Please enter a valid name.");
```

---

## 7️⃣ The `return` Statement

Functions can return values using `return`.

```javascript
const calculateSum = (a, b, c, d) => {
  const total = a + b + c + d;
  return total;
};

const marks = calculateSum(81, 90, 72, 99);
console.log(marks); // 342
```

* The `return` statement **ends** a function.
* Code after a return does not execute.

---

## 8️⃣ Using `return` for Reusability

Returning values allows reuse of function results:

```javascript
const calculateItemCost = (price, qty) => price * qty;

const totalCost =
  calculateItemCost(50, 2) +
  calculateItemCost(30, 3);

console.log(totalCost);
```

---

## 9️⃣ Guard Clauses (Terminating a Function Early)

You can use `return` to stop further execution:

```javascript
const displayGreeting = (user) => {
  if (!user.name) return; // Stop execution if no name
  console.log(`Hello, ${user.name}!`);
};
```

---

## 🔟 Arrow Function Shorthand

If the body only has one return statement, you can shorten it:

```javascript
const calculateSum = (a, b) => a + b;
const greet = () => console.log("Hello World!");
```

---

## 11️⃣ Functions as Object Methods

Functions can be stored as object properties (methods).

```javascript
const admin = {
  name: "John",
  displayGreeting() {
    console.log(`Hello ${this.name}, welcome back!`);
  },
};

admin.displayGreeting();
```

---

## 12️⃣ Function Naming Conventions

* Use **verbs** that describe what the function does.
* ✅ Example: `getFullName()`, `calculateSum()`, `checkStatus()`

```javascript
const getFullName = (first, last) => `${first} ${last}`;
```

---

## 13️⃣ Callback Functions

A **callback function** is a function passed as an argument to another function.

```javascript
const validateSolution = (isValid, statusMessage) => {
  if (isValid) {
    statusMessage("success");
  } else {
    statusMessage("error");
  }
};

const statusMessage = (status) => {
  if (status === "success") {
    console.log("Validation succeeded!");
  } else {
    console.log("Validation failed!");
  }
};

validateSolution(true, statusMessage);
```

### Exercise Example

```javascript
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
```

**Output:**

```
The solution to the sum is 7.
The solution to the product is 48.
Invalid parameter
```

---

## 14️⃣ Anonymous Functions

Anonymous functions have no names.

```javascript
const changeCityName = (cityName, makeChanges) => makeChanges(cityName);

const updatedCity = changeCityName("Tokyo", (city) => city.toUpperCase());
console.log(updatedCity); // "TOKYO"
```

✅ Anonymous functions are commonly used as **callbacks** or **immediate functions**.

---

## ✅ Summary

| Concept             | Description                 | Example                        |
| ------------------- | --------------------------- | ------------------------------ |
| Function Definition | Create a function           | `function greet() {}`          |
| Function Expression | Assign to variable          | `const greet = function() {};` |
| Arrow Function      | Short syntax                | `const greet = () => {};`      |
| Parameters          | Input variables             | `(a, b)`                       |
| Default Parameters  | Provide default value       | `(a, b = 10)`                  |
| Return              | Send back result            | `return a + b;`                |
| Method              | Function inside object      | `obj.method = () => {};`       |
| Callback            | Function passed as argument | `fn(callback)`                 |
| Anonymous Function  | No name                     | `(x) => x * 2`                 |

