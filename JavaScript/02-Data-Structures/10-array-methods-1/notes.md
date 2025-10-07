# Array Methods – Adding, Removing, and Counting Elements

## Adding Array Elements with `push()`

The **`push()`** method is used to add one or more elements **to the end of an array**.

```javascript
const vegetables = ["potato", "tomato", "onion"];
vegetables.push("beetroot");
console.log(vegetables); // ["potato", "tomato", "onion", "beetroot"]
````

In the example above, `vegetables.push("beetroot")` adds a new element `"beetroot"` to the end of the array.

---

### 🧠 Exercise – Add Element Using `push()`

Add an element `"Chocolate Brownie"` at the end of the array `iceCreams`.

```javascript
const iceCreams = ["Vanilla", "Strawberry", "Butterscotch"];
iceCreams.push("Chocolate Brownie");
console.log(iceCreams);
```

---

## Adding Array Elements with `unshift()`

The **`unshift()`** method adds an element **to the beginning of an array**.

```javascript
const vegetables = ["potato", "tomato", "onion"];
vegetables.unshift("beetroot");
console.log(vegetables); // ["beetroot", "potato", "tomato", "onion"]
```

---

## Removing Array Elements with `pop()`

The **`pop()`** method removes the **last element** of an array and **returns** it.

```javascript
const sports = ["Football", "Cricket", "Basketball"];
const removedSport = sports.pop();
console.log(sports); // ["Football", "Cricket"]
console.log(removedSport); // "Basketball"
```

---

## Removing Array Elements with `shift()`

The **`shift()`** method removes the **first element** of an array and **returns** it.

```javascript
const sports = ["Football", "Cricket", "Basketball"];
const removedFirst = sports.shift();
console.log(sports); // ["Cricket", "Basketball"]
console.log(removedFirst); // "Football"
```

---

## Array Length

The `.length` property returns the **total number of elements** in the array — including `undefined` values.

```javascript
const fruits = ["Apple", "Orange"];
console.log(fruits.length); // 2

fruits[2] = "Banana";
console.log(fruits.length); // 3
```

If there are gaps between indexes, they are still counted:

```javascript
const sports = ["Football", "Cricket", "Hockey", "Tennis", "Basketball"];
sports[9] = "Badminton";

console.log(sports.length); // 10
```

Here, even though indexes 5 to 8 are empty (`undefined`), the length is 10.

---

✅ **Summary**

* `push()` → adds to the **end**
* `unshift()` → adds to the **beginning**
* `pop()` → removes from the **end**
* `shift()` → removes from the **beginning**
* `.length` → gives total number of elements
