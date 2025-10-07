// 1️⃣ Converting to String
const num = 456;
console.log(String(num)); // "456"
console.log(num.toString()); // "456"

const bool = false;
console.log(String(bool)); // "false"

// Using String() with null and undefined
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
// console.log(null.toString()); // ❌ Error

// 2️⃣ Converting to Number
console.log(Number("123")); // 123
console.log(Number("12.34")); // 12.34
console.log(Number("")); // 0
console.log(Number("hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN

// 3️⃣ Checking for NaN
console.log(isNaN("123")); // false
console.log(isNaN("abc")); // true
console.log(isNaN(true)); // false
console.log(isNaN("")); // false
console.log(isNaN(false)); // false

// 4️⃣ typeof with composite data types
console.log(typeof new Map()); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
