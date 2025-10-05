# Variables in JavaScript

Variables allow us to store values that can be used and updated throughout our program.

## Why Use Variables?

Consider this example:

```javascript
console.log(120 + 120);
console.log(120 * 120);
console.log(120 - 120);
```

If we need to change `120` to `123`, we must update all occurrences. This becomes tedious. Variables solve this problem:

```javascript
const length = 120;

console.log(length + length);
console.log(length * length);
console.log(length - length);
```

Now, updating `length` automatically updates all usages.

---

## Rules for Variable Names

* Must start with a letter or underscore (`_`), e.g., `_myVar`.
* Cannot start with a number (`0invalidVariableName` ❌).
* Only letters, numbers, and underscores are allowed.
* Cannot use reserved keywords (`let`, `const`, `for`).
* Case-sensitive: `noOfBurgers` ≠ `noofburgers`.

### Naming Convention - camelCase

For multi-word names:

```javascript
const lengthOfBox = 120;
let firstName = "John";
let temperatureInCelsius = 36.6;
```

---

## Declaring Variables

### `const`

* Use `const` by default.
* Once assigned, the variable cannot point to a new value.
* Mutation is allowed for objects/arrays, but reassignment is not.

```javascript
const speed = 40;
// speed = 50; // ❌ Error
```

### `let`

* Use `let` if value needs to change.
* Can be declared without initialization (default `undefined`).

```javascript
let speed = 40;
speed = 56; // ✅
```

---

## Assignment vs Mutation

```javascript
let fruits = ["Apple", "Banana", "Mango"];
fruits = ["Strawberry", "Blueberry"]; // assignment (variable points to new array)


let cities = ["Paris", "London", "Chicago"];
cities[0] = "Tokyo"; // mutation (same array changed)
```

* `let` allows assignment and mutation.
* `const` allows mutation but not reassignment.

---

## Declaring Multiple Variables

```javascript
let length, width, height;
const length2 = 120, width2 = 60, height2 = 40;
```

---

## Data Types

* **Primitive** : Number, String, Boolean (immutable)
* **Non-primitive** : Object, Array (reference types, mutable)

```javascript
let wish = "Hello World"; // String
let age = 25;             // Number
let isAdmin = true;       // Boolean
let fruits = ["Apple", "Banana"]; // Array
```

* Check type with `typeof`:

```javascript
console.log(typeof wish); // "string"
console.log(typeof age);  // "number"
```

---

## Expressions

* Code that evaluates to a value.
* Binary operator: `+`, `-`, `*`, `/`, `=`
* Unary operator: `typeof`

```javascript
let sum = 23 + 45; 
console.log(sum); // 68
```

* Use parentheses for proper precedence:

```javascript
let total = (numberOfBoys + numberOfGirls) * numberOfClasses;
```

---

## Boolean & Comparisons

```javascript
let numberValue = 9;
let stringValue = "9";

console.log(numberValue === stringValue); // false (strict equality)
console.log(numberValue == stringValue);  // true  (loose equality)
```

* Strict equality `===` → type + value must match
* Loose equality `==` → type coercion occurs

---

## Naming Best Practices

* Use meaningful names: `lengthOfBox` instead of `l`
* Boolean variables as questions: `isAdmin = true`

```javascript
const lengthOfBox = 120; 
const lengthOfBoxWithUnit = "120cm";
let isAdmin = true;
```

* Avoid changing variable type after declaration:

```javascript
let lengthOfBox = 120; // number
// lengthOfBox = "120cm"; // ❌ avoid, can cause NaN in calculations
```

* Use `console.log()` to track values during development.
