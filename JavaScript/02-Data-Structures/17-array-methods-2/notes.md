# Execute Function for Each Element and Array Utility Methods

Arrays in JavaScript have several built-in methods that make working with collections of data easier.
These methods help you perform actions, transform, and filter elements efficiently.

---

## 1️⃣ forEach() – Execute a Function for Each Element

The **forEach()** method executes a provided function once for each array element.

It’s useful for performing operations on each item **without modifying the original array**.

### Example

```javascript
const fruits = ["apple", "banana", "mango", "orange"];

fruits.forEach(fruit => {
  console.log(`${fruit} is a fruit.`);
});
```

**Output:**

```
apple is a fruit.
banana is a fruit.
mango is a fruit.
orange is a fruit.
```

---

### Using index and array parameters

The callback passed to `forEach()` receives three parameters:

1. `element` → current item
2. `index` → position of the element
3. `array` → the entire array

### Example

```javascript
const fruits = ["apple", "banana", "mango", "orange"];

fruits.forEach((fruit, index, array) => {
  console.log(`${fruit} is a fruit. It is at index ${index} in the array: ${array}.`);
});
```

**Output:**

```
apple is a fruit. It is at index 0 in the array: apple,banana,mango,orange.
banana is a fruit. It is at index 1 in the array: apple,banana,mango,orange.
mango is a fruit. It is at index 2 in the array: apple,banana,mango,orange.
orange is a fruit. It is at index 3 in the array: apple,banana,mango,orange.
```

---

## 2️⃣ map() – Create a New Array by Transforming Elements

The **map()** method creates a **new array** by applying a function to each element.

Unlike `forEach()`, it **returns** a new array.

### Example

```javascript
const evenNumbers = [2, 4, 6];

const oddNumbers = evenNumbers.map(number => number + 1);

console.log(oddNumbers);
```

**Output:**

```
[3, 5, 7]
```

---

### Key Difference: `forEach()` vs `map()`

| Method        | Returns new array? | Use Case                               |
| ------------- | ------------------ | -------------------------------------- |
| `forEach()` | ❌ No              | To perform actions (like logging)      |
| `map()`     | ✅ Yes             | To transform data and create new array |

### Example

```javascript
const numbers = [1, 2, 3];

const doubledWithForEach = numbers.forEach(num => num * 2);
console.log(doubledWithForEach); // undefined

const doubledWithMap = numbers.map(num => num * 2);
console.log(doubledWithMap); // [2, 4, 6]
```

---

## 3️⃣ filter() – Filter Elements Based on a Condition

The **filter()** method creates a **new array** with elements that pass a specific condition.

### Example

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

**Output:**

```
[2, 4, 6]
```

---

## 4️⃣ Array.from() – Create Array from Other Values

The **Array.from()** method creates a new array from:

- Any iterable value (like strings)
- Array-like objects (like objects with length property)

### Example 1 – String to Array

```javascript
const string = "hello";
const letters = Array.from(string);

console.log(letters);
```

**Output:**

```
['h', 'e', 'l', 'l', 'o']
```

---

### Example 2 – Using a Mapping Function

```javascript
const numbers = "1234";
const doubled = Array.from(numbers, num => Number(num) * 2);

console.log(doubled);
```

**Output:**

```
[2, 4, 6, 8]
```

---

### Example 3 – From Object with Length and Indexed Keys

```javascript
const continents = {
  0: "Asia",
  1: "Antarctica",
  2: "Australia",
  3: "Africa",
  4: "North America",
  5: "South America",
  6: "Europe",
  length: 7
};

const continentsArray = Array.from(continents);
console.log(continentsArray);
```

**Output:**

```
['Asia', 'Antarctica', 'Australia', 'Africa', 'North America', 'South America', 'Europe']
```

---

### Note:

If an object is missing indexes or `length`, undefined values may appear.

---

## 5️⃣ Array.isArray() – Check if Value is an Array

The **isArray()** method checks whether a given value is an array.

### Example

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({}));        // false
console.log(Array.isArray(new Array("a", "b", "c"))); // true
```

---

## ✅ Summary

| Method       | Purpose                            | Returns      |
| ------------ | ---------------------------------- | ------------ |
| forEach()    | Executes function for each item    | undefined    |
| map()        | Transforms each element            | New array    |
| filter()     | Filters elements by condition      | New array    |
| Array.from() | Creates array from iterable/object | New array    |
| isArray()    | Checks if value is an array        | true / false |
