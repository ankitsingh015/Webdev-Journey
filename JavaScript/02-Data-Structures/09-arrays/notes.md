# Arrays in JavaScript

## What is an Array?

An **array** is used to store multiple values together in a single variable.

For example, a list of fruits:

```javascript
const fruits = ["Apple", "Orange", "Banana"];
````

* The values `"Apple"`, `"Orange"`, and `"Banana"` are called **elements** of the array.
* Arrays are a **special kind of object** and can hold **mixed data types**.

```javascript
const mixedArray = ["Hello", 42, true, null];
```

---

## 🧠 Exercise 1 – Create Array

Create an array named `geniuses` with these elements:
`"Tesla"`, `"Einstein"`, `"Newton"`

```javascript
const geniuses = ["Tesla", "Einstein", "Newton"];
console.log(geniuses);
```

---

## 🧠 Exercise 2 – Create Arrays

Create two arrays — `numbers` and `fruits`.

```javascript
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry", "watermelon"];

console.log(numbers);
console.log(fruits);
```

---

## Accessing Array Elements

Each element in an array has an **index** starting from **0**.

| Index | Element  |
| ----- | -------- |
| 0     | "Apple"  |
| 1     | "Orange" |
| 2     | "Banana" |

We can access elements by index:

```javascript
const fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
```

The **second element** of an array is at index `1`.

---

## Adding Elements to an Array

We can add new elements using **index assignment** or **push()**.

```javascript
const vegetables = ["Potato", "Tomato", "Onion"];
vegetables[3] = "Cabbage";
console.log(vegetables); // ["Potato", "Tomato", "Onion", "Cabbage"]
```

---

## Updating Array Elements

Access the element using its index and assign a new value.

```javascript
const sports = ["Football", "Cricket", "Tennis"];
sports[1] = "Hockey";
console.log(sports); // ["Football", "Hockey", "Tennis"]
```

---

## Non-Consecutive Indexes

Arrays can have **gaps in indexes**.

```javascript
const names = ["Alice", "Bob", "Charlie"];
names[7] = "David";
console.log(names);
// ["Alice", "Bob", "Charlie", empty × 4, "David"]
```

Indexes 3–6 are `undefined`.

---

## Mixing Data Types

Arrays can hold elements of different data types:

```javascript
const random = ["John", 42, true, null, { country: "India" }];
console.log(random);
```

---

## Naming Conventions

* Use **plural names** for arrays → e.g. `fruits`, `users`
* Name should **describe what it contains**
  ✅ `fruits`
  ❌ `array`, `list`, `data`
* Do not suffix names with `Array` or `List` → redundant.

---

## 🧠 Exercise – Object and Array

Store the details of a movie:

| Key        | Value                                                                  |
| ---------- | ---------------------------------------------------------------------- |
| name       | "Unbelievable"                                                         |
| genre      | "Crime", "Drama"                                                       |
| cast       | "Lisa Cholodenko", "Michael Dinner", "Susannah Grant", "Merritt Wever" |
| imdbRating | 6                                                                      |

Update the IMDB rating to 10, and log an array of all values.

```javascript
const movie = {
  name: "Unbelievable",
  genre: ["Crime", "Drama"],
  cast: ["Lisa Cholodenko", "Michael Dinner", "Susannah Grant", "Merritt Wever"],
  imdbRating: 6
};

movie.imdbRating = 10;

console.log(Object.values(movie));
// ["Unbelievable", ["Crime", "Drama"], ["Lisa Cholodenko", "Michael Dinner", "Susannah Grant", "Merritt Wever"], 10]
```