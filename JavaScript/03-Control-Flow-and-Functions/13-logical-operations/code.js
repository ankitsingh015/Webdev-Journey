// OR operator
const guest = { role: "faculty" };

if (guest.role === "faculty" || guest.role === "volunteer") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// AND operator
const student = {
  marks: 80,
  internshipDone: true,
};

const courseFee = 10000;
const courseDiscountAmount = 3000;

if (student.marks >= 75 && student.internshipDone) {
  const discountedFee = courseFee - courseDiscountAmount;
  console.log(`Your course fee after discount is: ${discountedFee}.`);
} else {
  console.log(`Your course fee is: ${courseFee}.`);
}

// NOT operator
const user = { name: "", isAdmin: false };

if (!user.isAdmin) {
  console.log("You do not have access to this feature");
}

if (!user.name) {
  console.log("Invalid user name");
}

// Inequality operator
const student2 = { grade: "B", nationality: "USA" };

if (student2.grade !== "D") {
  console.log("You get a 10% discount on your course fee");
}

// Nullish Coalescing operator
const totalNoOfAttempts = 5;

const user1 = {
  name: "Sam Smith",
  noOfAttempts: 3,
};

const user2 = {
  name: "Oliver Smith",
};

console.log(`${user1.name} has ${totalNoOfAttempts - user1.noOfAttempts} attempts left.`);
console.log(`${user2.name} has ${totalNoOfAttempts - (user2.noOfAttempts ?? 0)} attempts left.`);
