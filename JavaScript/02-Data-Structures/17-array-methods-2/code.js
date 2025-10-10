// 1️⃣ forEach()
const fruits = ["apple", "banana", "mango", "orange"];
fruits.forEach(fruit => console.log(`${fruit} is a fruit.`));

// With index and array
fruits.forEach((fruit, index, array) => {
  console.log(`${fruit} is a fruit. It is at index ${index} in the array: ${array}.`);
});

// 2️⃣ map()
const evenNumbers = [2, 4, 6];
const oddNumbers = evenNumbers.map(number => number + 1);
console.log(oddNumbers);

// Difference between forEach and map
const numbers = [1, 2, 3];
const doubledWithForEach = numbers.forEach(num => num * 2);
console.log(doubledWithForEach); // undefined
const doubledWithMap = numbers.map(num => num * 2);
console.log(doubledWithMap); // [2, 4, 6]

// 3️⃣ filter()
const values = [1, 2, 3, 4, 5, 6];
const evenValues = values.filter(num => num % 2 === 0);
console.log(evenValues);

// 4️⃣ Array.from()
const string = "hello";
const letters = Array.from(string);
console.log(letters);

const numberArray = "1234";
const doubled = Array.from(numberArray, num => Number(num) * 2);
console.log(doubled);

// From Object
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

// 5️⃣ isArray()
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({}));        // false
console.log(Array.isArray(new Array("a", "b", "c"))); // true