// 1️⃣ for loop
for (let noOfRepeats = 1; noOfRepeats < 6; noOfRepeats++) {
  console.log(noOfRepeats);
}

// 2️⃣ while loop
let iteration = 1;
while (iteration < 6) {
  console.log(iteration);
  iteration++;
}

// 3️⃣ do...while loop
let counter = 1;
do {
  console.log(counter);
  counter++;
} while (counter < 6);

// Difference between while and do...while
let count = 1;
while (count < 1) {
  console.log("while loop");
}

do {
  console.log("do...while loop");
} while (count < 1);

// 4️⃣ for...in loop with array
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index); // shows indexes
}
for (let index in colors) {
  console.log(colors[index]); // shows values
}

// 5️⃣ for...in loop with object
const car = { make: "Toyota", model: "Corolla", year: 2024 };
for (let key in car) {
  console.log(key); // keys
}
for (let key in car) {
  console.log(car[key]); // values
}

// 6️⃣ for...of loop
const names = ["Alice", "Bob", "Charlie"];
for (let name of names) {
  console.log(name);
}

// 7️⃣ break statement
for (let iteration = 1; iteration <= 5; iteration++) {
  if (iteration === 3) break;
  console.log(iteration);
}

// 8️⃣ continue statement
let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 1) continue;
  console.log(i); // even numbers
}

for (let j = 1; j <= 10; j++) {
  if (j % 2 === 0) continue;
  console.log(j); // odd numbers
}
