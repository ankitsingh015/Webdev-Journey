// Object Creation
const car = {
  model: 2011,
  fuelType: "petrol",
  seatingCapacity: 5
};
console.log(car);

// Exercise 1
const bird = {
  type: "owl",
  canFly: true,
  legCount: 2
};
console.log(bird);

// Exercise 2
const library = {
  fiction: "Harry Potter",
  autobiography: "The diary of a young girl",
  history: "The Discovery of India"
};
console.log(library);

// Using variables in objects
const noOfSeats = 5;
const carDetails = {
  model: 2011,
  fuelType: "petrol",
  seatingCapacity: noOfSeats
};
console.log(`It is a ${carDetails.model} model car that runs on ${carDetails.fuelType} and has ${carDetails.seatingCapacity} seats.`);

// Shorthand syntax
const model = 2011;
const fuelType = "petrol";
const seatingCapacity = 5;
const shortCar = { model, fuelType, seatingCapacity };
console.log(shortCar);

// Dot Notation
const person = { name: "Oliver", age: 22 };
person.profession = "Engineer";
person.age = 23;
console.log(person);

// Bracket Notation
const project = {
  "12": "Data Migration",
  "project-lead": "Sarah"
};
console.log(project["12"]);
console.log(project["project-lead"]);
const keyName = "project-lead";
console.log(project[keyName]);

// Add properties dynamically
const subjects = {};
subjects[104] = "Computer";
subjects[21 * 5] = "Mathematics";
subjects[103] = "Mathematics";
console.log(subjects);

// Object utilities
const user = { name: "Oliver", age: 23, city: "London" };
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

