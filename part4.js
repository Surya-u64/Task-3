//1
let total = [71, 72, 73, 86, 93];
for (let mark of total) {
  console.log(mark);
}

//2
let empdetails = {
  name4: "Surya",
  age4: 24,
  salary4: 30000,
  location4: "Salem",
};
for (let emp in empdetails) {
  console.log(emp + " : " + empdetails[emp]);
}

//3
let numbers = [10, 15, 20, 25, 30];

for (let num of numbers) {
  if (num % 2 == 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}

//4
let student = {
  name: "Surya",
  marks: 75,
};

if (student.marks >= 35) {
  console.log(student.name + " is Pass");
} else {
  console.log(student.name + " is Fail");
}

//5
let trafficSignal = "green";

switch (trafficSignal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Wait");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

//6
let values = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${i} X ${values}   = ${values * i}`);
}

//7
let fruits = ["apple", "mango", "orange", "banana", "grapes"];

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

//8
let employeees = {
  name: "Surya",
  age: 24,
  salary: 30000,
  location: "Salem",
};

for (let key in employeees) {
  console.log(key + " : " + employeees[key]);
}

if (employeees.salary > 25000) {
  console.log("Salary is above 25000");
} else {
  console.log("Salary is below or equal to 25000");
}

//9
let username1 = "surya";
let password2 = "12345";

if (username1 === "surya" && password2 === "12345") {
  console.log("Welcome Surya!");
} else {
  console.log("Login Failed");
}

//10
let students = [
  {
    name: "Dhoni",
    age: 24,
    marks: 85,
  },
  {
    name: "Rohit",
    age: 23,
    marks: 30,
  },
  {
    name: "Kholi",
    age: 22,
    marks: 65,
  },
  {
    name: "KL Rahul",
    age: 21,
    marks: 90,
  },
  {
    name: "Raina",
    age: 24,
    marks: 25,
  },
];

for (let student of students) {
  console.log("--------------------");

  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Marks:", student.marks);

  if (student.marks >= 35) {
    console.log("Result: Pass");
  } else {
    console.log("Result: Fail");
  }
}
