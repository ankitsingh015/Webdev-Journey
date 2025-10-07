# Objects in JavaScript

## Why Use Objects

When storing related information (like details of a car), using separate variables can become messy.

```javascript
const model = 2011;
const fuelType = "petrol";
const seatingCapacity = 5;
````

Instead of multiple variables, we can use an **object** to group related data.

```javascript
const car = {
  model: 2011,
  fuelType: "petrol",
  seatingCapacity: 5
};

console.log(car);
```

Objects make code **cleaner, organized, and easy to maintain**.

---

## Object Properties

Each property of an object has a **key** and a **value**:

* `model` → key
* `2011` → value

```javascript
const car = {
  model: 2011,
  fuelType: "petrol"
};
```

---

## Exercises

### 🐦 Exercise 1 - Create Object

Create a `bird` object with these properties:

| Key      | Value |
| -------- | ----- |
| type     | "owl" |
| canFly   | true  |
| legCount | 2     |

```javascript
const bird = {
  type: "owl",
  canFly: true,
  legCount: 2
};
```

---

### 📚 Exercise 2 - Create Object

Create a `library` object with the following:

| Key           | Value                       |
| ------------- | --------------------------- |
| fiction       | "Harry Potter"              |
| autobiography | "The diary of a young girl" |
| history       | "The Discovery of India"    |

```javascript
const library = {
  fiction: "Harry Potter",
  autobiography: "The diary of a young girl",
  history: "The Discovery of India"
};

console.log(library);
```

---

## Using Variables as Object Properties

We can assign variable values to object properties:

```javascript
const noOfSeats = 5;

const car = {
  model: 2011,
  fuelType: "petrol",
  seatingCapacity: noOfSeats
};

console.log(`It is a ${car.model} model car that runs on ${car.fuelType} and has ${car.seatingCapacity} seats.`);
```

---

## Object Property Shorthand

If key and variable name are same, use **shorthand syntax**:

```javascript
const model = 2011;
const fuelType = "petrol";
const seatingCapacity = 5;

const car = { model, fuelType, seatingCapacity };
console.log(car);
```

---

## Dot Notation

Used to **read**, **add**, and **update** properties.

```javascript
const person = { name: "Oliver", age: 22 };

// Read
console.log(person.name);

// Add
person.profession = "Engineer";

// Update
person.age = 23;

console.log(person);
```

---

## Bracket Notation

Used when keys are not valid variable names.

```javascript
const project = {
  "12": "Data Migration",
  "project-lead": "Sarah"
};

// Access
console.log(project["12"]);
console.log(project["project-lead"]);

// Using variable as key
const keyName = "project-lead";
console.log(project[keyName]);
```

Add new properties dynamically:

```javascript
const subjects = {};
subjects[104] = "Computer";
subjects[21 * 5] = "Mathematics"; // 105 = "Mathematics"
```

Update using bracket notation:

```javascript
subjects[103] = "Mathematics";
```

---

## Object Utility Methods

### 🧩 Get Keys

```javascript
const person = { name: "Oliver", age: 23, city: "London" };
console.log(Object.keys(person));
// ["name", "age", "city"]
```

### 🧩 Get Values

```javascript
console.log(Object.values(person));
// ["Oliver", 23, "London"]
```

### 🧩 Get Key-Value Pairs

```javascript
console.log(Object.entries(person));
// [["name", "Oliver"], ["age", 23], ["city", "London"]]
```

---

## Naming Conventions

* Use clear, descriptive names:
  ✅ `user`, `profile`
  ❌ `object`, `data`, `info`

* Avoid redundant names:
  ❌ `userObject`, ✅ `user`

* Keys follow variable naming rules:
  ✅ `firstName`
  ❌ `first-name`

````
