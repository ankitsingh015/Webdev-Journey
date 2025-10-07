# Logical Operators in JavaScript

JavaScript provides several logical operators that let us combine or modify conditions in a single statement.

---

## OR Operator (||)

The **OR (`||`)** operator returns `true` if **at least one** of the conditions is true.

### Example – Access Control

```javascript
const guest = { role: "faculty" };

if (guest.role === "faculty" || guest.role === "volunteer") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

✅ Output: `Access granted`

This is equivalent to:

```javascript
if (guest.role === "faculty") {
  console.log("Access granted");
} else if (guest.role === "volunteer") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

The `||` operator allows us to combine both conditions into a **single if statement**, making code shorter and clearer.

| guest.role === "faculty" | guest.role === "volunteer" | Result |
| ------------------------ | -------------------------- | ------ |
| true                     | true                       | true   |
| true                     | false                      | true   |
| false                    | true                       | true   |
| false                    | false                      | false  |

---

### Example – Check if value is provided

```javascript
const student = { name: "John" };

if (student.grade === null || student.grade === undefined) {
  console.log("Student grade must be provided");
}
```

---

## AND Operator (&&)

The **AND (`&&`)** operator returns `true` only if **all** conditions are true.

### Example – Discount Eligibility

```javascript
const student = {
  marks: 80,
  internshipDone: true,
};

const courseFee = 10000;
const courseDiscountAmount = 3000;

if (student.marks >= 75 && student.internshipDone) {
  const discountedFee = courseFee - courseDiscountAmount;
  console.log(`Your course fee after discount is: ${discountedFee}.`);
} else {
  console.log(`Your course fee is: ${courseFee}.`);
}
```

✅ Output: `Your course fee after discount is: 7000.`

| student.marks >= 75 | student.internshipDone | Result |
| ------------------- | ---------------------- | ------ |
| true                | true                   | true   |
| true                | false                  | false  |
| false               | true                   | false  |
| false               | false                  | false  |

---

## NOT Operator (!)

The **NOT (`!`)** operator inverts a boolean value.

```javascript
const user = { name: "Eve", isAdmin: false };

if (!user.isAdmin) {
  console.log("You do not have access to this feature");
}
```

✅ Output: `You do not have access to this feature`

| user.isAdmin | !user.isAdmin |
| ------------ | ------------- |
| true         | false         |
| false        | true          |

---

### Example – Check for Empty Value

```javascript
const user = { name: "" };

if (!user.name) {
  console.log("Invalid user name");
}
```

✅ Output: `Invalid user name`

Here, `!user.name` becomes true because `""` is a falsy value.

---

## NOT vs Inequality Operators

If you just need to check **not equal**, use `!==` instead of wrapping the expression in `!()`.

### Example

```javascript
const student = { grade: "B", nationality: "USA" };

if (student.grade !== "D") {
  console.log("You get a 10% discount on your course fee");
}
```

✅ Output: `You get a 10% discount on your course fee`

---

### Example – Multiple Comparisons with NOT

```javascript
if (!(student.grade === "D") && !(student.nationality === "India")) {
  console.log("You get a 10% discount on your course fee");
}
```

---

## Nullish Coalescing Operator (??)

The **Nullish Coalescing (`??`)** operator returns the **left-hand operand** if it is **not null or undefined**.
Otherwise, it returns the **right-hand operand**.

```javascript
console.log("Hello Sam Smith" ?? "Hello Guest"); // Hello Sam Smith
console.log(null ?? "Hello Guest"); // Hello Guest
console.log(undefined ?? "Hello Guest"); // Hello Guest
console.log(0 ?? 234); // 0
console.log(false ?? true); // false
console.log(undefined ?? null); // null
```

---

### Example – User Role

```javascript
const user1 = {
  name: "Sam Smith",
  role: "Admin",
};

const user2 = {
  name: "Oliver Smith",
  // role is undefined
};

console.log(`${user1.name} is a ${user1.role} user.`);
console.log(`${user2.name} is a ${user2.role} user.`);
```

Output (unwanted):

```
Sam Smith is a Admin user.
Oliver Smith is a undefined user.
```

We can fix it using `??`:

```javascript
console.log(`${user2.name} is a ${user2.role ?? "Standard"} user.`);
```

✅ Output:

```
Sam Smith is a Admin user.
Oliver Smith is a Standard user.
```

---

### Exercise – Nullish Coalescing Operator

We have two users and a total number of attempts.
If the number of attempts is missing, use a default of `0`.

```javascript
const totalNoOfAttempts = 5;

const user1 = {
  name: "Sam Smith",
  noOfAttempts: 3,
};

const user2 = {
  name: "Oliver Smith",
};

console.log(`${user1.name} has ${totalNoOfAttempts - user1.noOfAttempts} attempts left.`);
console.log(`${user2.name} has ${totalNoOfAttempts - (user2.noOfAttempts ?? 0)} attempts left.`);
```

✅ Output:

```
Sam Smith has 2 attempts left.
Oliver Smith has 5 attempts left.
```

---

✅ **Summary**

| Operator | Description                                                     | Example     |
| -------- | --------------------------------------------------------------- | ----------- |
| `\|\|`   | Returns true if**any** condition is true                  | a `\|\| b`  |
| `&&`   | Returns true if **all** conditions are true              | `a && b`  |
| `!`    | Reverses boolean value                                          | `!a`      |
| `!==`  | Checks for inequality                                           | `a !== b` |
| `??`   | Returns right-hand value only if left-hand is null or undefined | `a ?? b`  |
