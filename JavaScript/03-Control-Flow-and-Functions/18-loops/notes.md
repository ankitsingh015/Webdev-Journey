# Topic 17 – Loops in JavaScript

Loops allow us to run a block of code multiple times.
They continue executing **as long as a condition evaluates to true**.

---

## 1️⃣ for Loop

A **for loop** is used to repeat a block of code a specific number of times.

### Syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // code to run
}
```

### Example:

```javascript
for (let noOfRepeats = 1; noOfRepeats < 6; noOfRepeats++) {
  console.log(noOfRepeats);
}
```

### Output:

```
1
2
3
4
5
```

### Steps:

1. **Initialization** → Runs once before the loop begins.
2. **Condition** → Checked before each iteration. Loop continues while true.
3. **Increment/Decrement** → Updates the variable after each iteration.

Once the condition becomes false, the loop stops.

---

## 2️⃣ while Loop

The **while loop** runs **as long as a given condition is true**.
The condition is checked **before** each iteration.

### Example:

```javascript
let iteration = 1;

while (iteration < 6) {
  console.log(iteration);
  iteration++;
}
```

### Output:

```
1
2
3
4
5
```

### Steps:

1. Check condition.
2. If true → run block.
3. Increment variable.
4. Repeat until condition is false.

---

## 3️⃣ do...while Loop

A **do...while loop** runs the code block **at least once**,
and then checks the condition at the **end** of each iteration.

### Example:

```javascript
let iteration = 1;

do {
  console.log(iteration);
  iteration++;
} while (iteration < 6);
```

### Output:

```
1
2
3
4
5
```

✅ Even if the condition is false initially, a **do...while** loop executes once before checking.

### Example (Difference with while)

```javascript
let count = 1;

while (count < 1) {
  console.log("while loop");
}

do {
  console.log("do...while loop");
} while (count < 1);
```

**Output:**

```
do...while loop
```

---

## 4️⃣ for...in Loop (Used with Arrays and Objects)

The **for...in loop** iterates over the **keys (indexes or property names)** of an object or array.

### Example – Array Indexes:

```javascript
const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index);
}
```

**Output:**

```
0
1
2
```

### Example – Array Values:

```javascript
for (let index in colors) {
  console.log(colors[index]);
}
```

**Output:**

```
red
green
blue
```

---

### Example – Object Keys:

```javascript
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2024
};

for (let key in car) {
  console.log(key);
}
```

**Output:**

```
make
model
year
```

### Example – Object Values:

```javascript
for (let key in car) {
  console.log(car[key]);
}
```

**Output:**

```
Toyota
Corolla
2024
```

---

## 5️⃣ for...of Loop

The **for...of loop** iterates directly over **values** of an iterable (like an array or string).

### Example:

```javascript
const names = ["Alice", "Bob", "Charlie"];

for (let name of names) {
  console.log(name);
}
```

**Output:**

```
Alice
Bob
Charlie
```

---

## 6️⃣ break Statement

The **break** statement immediately stops the loop’s execution.

### Example:

```javascript
for (let iteration = 1; iteration <= 5; iteration++) {
  if (iteration === 3) {
    break;
  }
  console.log(iteration);
}
```

**Output:**

```
1
2
```

✅ The loop stops when `iteration === 3`.

---

## 7️⃣ continue Statement

The **continue** statement skips the current iteration and moves to the next one.

### Example – Print Even Numbers:

```javascript
let iteration = 0;

while (iteration < 10) {
  iteration++;

  if (iteration % 2 === 1) {
    continue; // skip odd numbers
  }

  console.log(iteration);
}
```

**Output:**

```
2
4
6
8
10
```

---

### Example – Print Odd Numbers:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
```

**Output:**

```
1
3
5
7
9
```

---

## ✅ Summary

| Loop Type  | Condition Checked     | Executes At Least Once | Use Case                                  |
| ---------- | --------------------- | ---------------------- | ----------------------------------------- |
| for        | Before each iteration | ❌ No                  | Fixed number of iterations                |
| while      | Before each iteration | ❌ No                  | Condition-based loops                     |
| do...while | After each iteration  | ✅ Yes                 | Run at least once                         |
| for...in   | N/A                   | N/A                    | Iterate over object keys or array indexes |
| for...of   | N/A                   | N/A                    | Iterate over iterable values              |
| break      | —                    | —                     | Stop loop execution                       |
| continue   | —                    | —                     | Skip current iteration                    |
