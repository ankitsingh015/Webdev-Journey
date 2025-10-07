// Adding elements with push()
const vegetables = ["potato", "tomato", "onion"];
vegetables.push("beetroot");
console.log(vegetables);

// Exercise - push
const iceCreams = ["Vanilla", "Strawberry", "Butterscotch"];
iceCreams.push("Chocolate Brownie");
console.log(iceCreams);

// Adding elements with unshift()
const veggies = ["potato", "tomato", "onion"];
veggies.unshift("beetroot");
console.log(veggies);

// Removing last element with pop()
const sports1 = ["Football", "Cricket", "Basketball"];
const removedSport = sports1.pop();
console.log(sports1);
console.log("Removed:", removedSport);

// Removing first element with shift()
const sports2 = ["Football", "Cricket", "Basketball"];
const removedFirst = sports2.shift();
console.log(sports2);
console.log("Removed:", removedFirst);

// Array length examples
const fruits = ["Apple", "Orange"];
console.log("Initial length:", fruits.length);

fruits[2] = "Banana";
console.log("After adding element:", fruits.length);

const sports3 = ["Football", "Cricket", "Hockey", "Tennis", "Basketball"];
sports3[9] = "Badminton";
console.log("Length including undefined:", sports3.length);