# Type Conversion in JavaScript

Sometimes, we need to explicitly convert one data type into another.  
JavaScript provides built-in methods for such conversions.

---

## 1️⃣ Converting to String

We can use **String()** or **toString()** to convert non-string values into strings.

### Example – Number to String

```javascript
const number = 123;
console.log(typeof number); // number

const converted = String(number);
console.log(typeof converted); // string
````

### Example – Boolean to String

```javascript
const boolValue = true;
const strBool = String(boolValue);
console.log(strBool); // "true"
console.log(typeof strBool); // string
```

### Important:

When we convert `null` or `undefined` into a string:

* We can use **String()**
* But using **toString()** will cause an **error**

```javascript
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// console.log(null.toString()); ❌ Error
```

---

## 2️⃣ Converting to Number

We can use the **Number()** method to convert non-number values into numbers.

### Example – String to Number

```javascript
console.log(Number("123")); // 123
console.log(Number("12.34")); // 12.34
```

Strings that contain valid numbers will convert successfully.

### Example – Empty String to Number

```javascript
console.log(Number("")); // 0
```

### Example – Non-numeric String to Number

```javascript
console.log(Number("abc")); // NaN
```

### Example – Boolean to Number

```javascript
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

### Example – null and undefined to Number

```javascript
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
```

### Example – NaN remains NaN

```javascript
console.log(Number(NaN)); // NaN
```

---

## 3️⃣ Checking if a Value is NaN

The **isNaN()** method checks whether a value becomes `NaN` when converted to a number.

* Returns **true** if the value is `NaN`
* Returns **false** if the value is a valid number

### Example

```javascript
console.log(isNaN("123")); // false → becomes 123 (valid number)
console.log(isNaN("abc")); // true → becomes NaN
console.log(isNaN(true));  // false → becomes 1
console.log(isNaN(""));    // false → becomes 0
```

So:

* `isNaN("")` → `false` (empty string converts to 0)
* `isNaN(true)` → `false` (true converts to 1)
* `isNaN(false)` → `false` (false converts to 0)

---

## 4️⃣ typeof Operator and Composite Data Types

We can use the **typeof** operator to check the data type of a value.

```javascript
console.log(typeof new Map()); // object
```

Even though `Map`, `Array`, and other complex types are different structures,
`typeof` returns `"object"` for all composite data types.

### Example – typeof null

```javascript
console.log(typeof null); // object
```

This is a well-known quirk in JavaScript.
Even though `null` is a primitive value, `typeof null` returns `"object"`.

---

✅ **Summary Table**

| Value / Expression  | Conversion              | Result   |
| ------------------- | ----------------------- | -------- |
| `String(123)`       | Number → String         | `"123"`  |
| `String(true)`      | Boolean → String        | `"true"` |
| `String(null)`      | null → String           | `"null"` |
| `Number("123")`     | String → Number         | `123`    |
| `Number("abc")`     | Invalid String → Number | `NaN`    |
| `Number("")`        | Empty String → Number   | `0`      |
| `Number(true)`      | Boolean → Number        | `1`      |
| `Number(false)`     | Boolean → Number        | `0`      |
| `Number(null)`      | null → Number           | `0`      |
| `Number(undefined)` | undefined → Number      | `NaN`    |
| `typeof new Map()`  | Composite → `"object"`  |          |
| `typeof null`       | null → `"object"`       |          |

