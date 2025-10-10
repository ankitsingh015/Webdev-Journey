# Comments in JavaScript

Comments are **notes written in the code** to explain what the code does.
They make programs easier to read, understand, and maintain — but are **ignored by JavaScript during execution**.

---

## 1️⃣ Single-Line Comment

We can add **single-line comments** using `//`.

### Example 1 – Full-line comment

```javascript
// This line prints a greeting message
console.log("Hello, World!");
```

Everything after `//` on that line becomes a comment and is ignored by JavaScript.

### Example 2 – Inline comment

```javascript
const price = 100; // Price in dollars
console.log(price);
```

✅ The code on the left executes normally.
✅ The text on the right side of `//` is just a note.

---

## 2️⃣ Multiple-Line Comment

We can add **multi-line comments** using:

```javascript
/*  comment text  */
```

### Example

```javascript
/* 
This code calculates the total cost.
We multiply price and quantity to get the result.
*/
const price = 50;
const quantity = 3;
const total = price * quantity;
console.log(total);
```

✅ Everything between `/*` and `*/` is treated as a comment — even across multiple lines.

---

## 3️⃣ Using Comments to Disable Code

You can use comments to **ignore or temporarily disable** code.

### Example

```javascript
const name = "Alice";
// console.log("This line is disabled temporarily");
console.log(`Welcome, ${name}!`);
```

✅ The commented-out code won’t run but can be re-enabled later by removing the `//`.

---

## ✅ Best Practices

- Keep comments **short and meaningful**.
- Avoid explaining obvious code.
- Use comments to describe **why** something is done — not just **what** it does.

---

## ✅ Summary

| Comment Type  | Syntax              | Description                     |
| ------------- | ------------------- | ------------------------------- |
| Single-line   | `//`              | Comments one line               |
| Multi-line    | `/* ... */`       | Comments multiple lines         |
| Inline        | `code // comment` | Comment after code on same line |
| Disabled code | Prefix with `//`  | Temporarily stop code execution |
