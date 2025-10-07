// Create Arrays
const geniuses = ["Tesla", "Einstein", "Newton"];
console.log(geniuses);

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry", "watermelon"];
console.log(numbers);
console.log(fruits);

// Accessing elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry

// Adding elements
const vegetables = ["Potato", "Tomato", "Onion"];
vegetables[3] = "Cabbage";
console.log(vegetables);

// Updating elements
const sports = ["Football", "Cricket", "Tennis"];
sports[1] = "Hockey";
console.log(sports);

// Non-consecutive indexes
const names = ["Alice", "Bob", "Charlie"];
names[7] = "David";
console.log(names);

// Mixed data types
const random = ["John", 42, true, null, { country: "India" }];
console.log(random);

// Object and Array combined
const movie = {
  name: "Unbelievable",
  genre: ["Crime", "Drama"],
  cast: ["Lisa Cholodenko", "Michael Dinner", "Susannah Grant", "Merritt Wever"],
  imdbRating: 6
};

// Update property
movie.imdbRating = 10;

// Log all values as array
console.log(Object.values(movie));