# Conditional Statements in JavaScript

In JavaScript, we often make decisions based on conditions.  
Conditional statements help us control the flow of our program.

---

## Truthy and Falsy Values

In JavaScript, every value can be converted to a Boolean (`true` or `false`).

We can use the `Boolean()` function to check this:

```javascript
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false
console.log(Boolean(false));    // false
```

These are  **falsy values** .

All other values are **truthy** — they evaluate to `true`.

```javascript
console.log(Boolean("Hello"));  // true
console.log(Boolean(123));      // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
```

---

## if Statement

The `if` statement runs a block of code **only if** the condition is true.

```javascript
const age = 15;
const votingAge = 18;

if (age < votingAge) {
  console.log("Person is not eligible to vote.");
}
```

If the condition is false, the block is skipped.

```javascript
const age = 25;
const votingAge = 18;

if (age < votingAge) {
  console.log("Person is not eligible to vote.");
}
// No output, because condition is false
```

---

## if with Truthy Values

An `if` statement executes if the condition is  **truthy** , not just explicitly `true`.

```javascript
if ("Hello") {
  console.log("This will print because 'Hello' is truthy!");
}

if (0) {
  console.log("This will NOT print because 0 is falsy.");
}
```

You can even check truthy values directly from variables:

```javascript
const employee = { name: "Sam" };

if (employee.name) {
  console.log("Name of the employee is " + employee.name);
}
```

---

## else Statement

The `else` statement runs when the `if` condition is false.

```javascript
const number = 5;

if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
```

---

## else if Statement

We use `else if` when we need to check multiple conditions.

```javascript
const number = 0;

if (number > 0) {
  console.log("The number is positive.");
} else if (number === 0) {
  console.log("The number is 0.");
} else {
  console.log("The number is negative.");
}
```

You can chain multiple `else if` conditions if needed.

---

## switch Statement

When you have **many conditions** for a single value, a `switch` statement makes the code cleaner.

```javascript
const languageCode = "fr";

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
```

---

### The `break` Statement

Each `case` should end with `break` to prevent “fall-through” — where execution continues to the next case.

```javascript
const name = "Eve";

switch (name) {
  case "John":
    console.log("This is the developer.");
    break;
  case "Eve":
    console.log("This is the admin.");
    break;
  default:
    console.log("Unknown user.");
}
```

Without `break`, it continues executing all following cases.

---

### Fall-Through (Grouping Cases)

You can intentionally omit `break` to group cases:

```javascript
const rollNumber = 5649;

switch (rollNumber) {
  case 8746:
  case 5649:
  case 3268:
  case 7901:
    console.log("Congratulations, you have passed the test!");
    break;
  case 4265:
  case 4356:
    console.log("Please retake the test.");
    break;
  default:
    console.log("Roll number not found.");
}
```

---

## Ternary Operator

The **Ternary operator** is a shorthand for `if...else`.

```javascript
const number = 7;
const result = number % 2 === 0 ? "even" : "odd";
console.log(result); // "odd"
```

Structure:

```
condition ? expressionIfTrue : expressionIfFalse;
```

Use the ternary operator only for  **short, simple conditions** .

---

✅ **Summary**

* Falsy values: `0`, `false`, `""`, `null`, `undefined`, `NaN`
* Truthy values: Everything else
* `if` → executes if condition is truthy
* `else` → executes if condition is false
* `else if` → used for multiple conditions
* `switch` → cleaner for many equal comparisons
* `break` → stops switch execution
* `?:` → ternary operator shorthand


