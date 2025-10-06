# Undefined and Null in JavaScript

## The `undefined` Data Type

`undefined` is a data type in JavaScript.  

- A variable declared using `let` without assigning a value **defaults to `undefined`**.

```javascript
let name = "Oliver";
let age;

console.log(name); // Oliver
console.log(age);  // undefined
```

* **Note:** A variable declared with `const` **must be assigned a value** immediately.

  Otherwise, it will throw a  **Syntax Error** .

```javascript
const x; // Syntax Error
```

---

## The `null` Data Type

`null` is a data type used to explicitly indicate  **the absence of a value** .

* If a variable is `undefined`, it means it  **has no value assigned** .
* If a variable is `null`, it  **has a value assigned** , but the value is intentionally empty.

```javascript
let unassigned; // undefined
let emptyValue = null;

console.log(unassigned); // undefined
console.log(emptyValue); // null
```

* `undefined` is usually the default value of uninitialized variables.
* `null` is explicitly assigned to indicate "no value".