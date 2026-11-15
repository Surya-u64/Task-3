//1

let num = -10;
if (num > 0) {
  console.log("Positive Number");
} else {
  console.log("Negative Number");
}

//2
let age1 = 24;

if (age1 >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("not Eligible");
}

//3

let val = 23;

if (val % 2 == 0) {
  console.log("Even");
} else {
  console.log("odd");
}

//4

let mark = 55;
let Passmark = 35;
if (mark >= Passmark) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//5
let time = 23;

if (time >= 1 && time <= 6) {
  console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
  console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
  console.log("Good Afternoon");
} else if (time >= 16 && time <= 18) {
  console.log("Good Evening");
} else if (time >= 19 && time <= 24) {
  console.log("Good Night");
} else {
  console.log("Invalid Time");
}

//6
let age2 = 24;
let height = 170;
let weight = 65;

if (age2 >= 18) {
  if (height >= 170) {
    if (weight >= 60) {
      console.log("You Are Selected");
    } else {
      console.log("weight not satisfied");
    }
  } else {
    console.log("height not satisfied");
  }
} else {
  console.log("Age not satisfied");
}

//7
let trafficLight = "red";

switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Traffic Signal");
}

//8
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Day");
}

//9
let username = "surya";
let password = "Alex1";

if (username === "surya" && password === "Alex1") {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

//10
let marks = 20;

if (marks >= 45 && marks <= 50) {
  console.log("Grade A");
} else if (marks >= 35 && marks < 45) {
  console.log("Grade B");
} else if (marks >= 25 && marks < 35) {
  console.log("Grade C");
} else if (marks >= 0 && marks < 25) {
  console.log("Fail");
} else {
  console.log("Invalid Marks");
}
