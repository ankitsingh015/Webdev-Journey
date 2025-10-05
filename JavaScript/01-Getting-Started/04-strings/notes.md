# Strings in JavaScript

Strings are sequences of characters used to store text in JavaScript.

## Creating Strings

You can create strings using **double quotes** or **single quotes**:

```javascript
// Using double quotes
let fullName = "John Doe";
let book = "JavaScript Basics";
let someRandomSentence = "Learning JS is fun!";

// Using single quotes
let name = 'Alice';
let sport = 'Football';
let someRandomWord = 'Hello';
```

> Using single or double quotes works the same.
>
> BigBinary Academy uses **double quotes** for consistency.

---

## Joining Strings

Strings can be joined using the `+` operator:

```javascript
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe
```

---

## Template Strings

Template strings use **backticks (`)** instead of quotes. They allow:

* Concatenation without `+`
* **String interpolation** using `${}`

```javascript
let firstName = "John";
let lastName = "Doe";

// Using template strings
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // John Doe
```

---

### Multi-line Template Strings

Template strings can span multiple lines:

```javascript
let message = `Hello John,
Welcome to BigBinary Academy!
Enjoy learning JavaScript.`;

console.log(message);
```

> Benefits of using backticks: easier concatenation, readable multi-line strings, and variable interpolation.
