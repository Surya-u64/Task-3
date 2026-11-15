//1
var name = "surya";
let age = 24;
const city = "salem";

console.log(name); //surya
console.log(age); //24
console.log(city); //salem

//2
let Name = "surya";
let role = "java full stack developer";
let salary = 20000;
let isWorking = true;

console.log(typeof Name); //string
console.log(typeof role); //string
console.log(typeof salary); //number
console.log(typeof isWorking); //boolean

//3
let fruits = ["apple", "mango", "orange", "dragon fruit", "banana"];

console.log(fruits[0]); //apple
console.log(fruits[2]); //orange
console.log(fruits[4]); //banana

//4

let Employee = {
  name: "Surya",
  age5: 24,
  location: "Salem",
  skills: ["Java", "JavaScript", "React"],
};

console.log(Employee.name); //Surya
console.log(Employee.age5); //24
console.log(Employee.location); //salem
console.log(Employee.skills); //"Java", "JavaScript", "React"

//5
let a = 20;
let b = 10;

console.log(a + b); //30
console.log(a - b); //10
console.log(a * b); //200
console.log(a / b); //2
console.log(a % b); //0
console.log(a ** b); //10240

//6
let n = 12;

console.log(++n); //13

//7

let Num = 7;
let res = Num++;

console.log(Num); //8
console.log(res); //7

//8

let a1 = 10;
let b1 = 5;

a1 += b1;
console.log(a1); //15

a1 -= b1;
console.log(a1); //10

a1 *= b1;
console.log(a1); //50

a1 /= b1;
console.log(a1); //10

a1 %= b1;
console.log(a1); //0

a1 **= b1;
console.log(a1); //0

//9

let x = 100;
let y = 50;
let z = 200;
console.log(x > y); // true
console.log(x == x); // true
console.log(x != z); // true

//10

let x1 = 25;
let x2 = "25";

console.log(25 == "25"); // true
console.log(25 === "25"); // false
console.log(x1 == x2); // ftrue
console.log(x1 === x2); // false

//11
let Age = 24;
let Salary = 30000;

console.log(Age > 18 && Salary > 20000); //true

//12
let agee = 18;
let eligible = false;

console.log(agee >= 18 || false);

//13

let b2 = 20;
let b3 = 20;

console.log(!(b1 == b3)); //false

//14
let Agee = 24;

let result = Agee >= 18 ? "Eligible" : "Not eligible";

console.log(result);

//15
let Name2 = "Suriya";
let city1 = "Salem";
let hobby = "Gaming";

console.log(
  `My name is ${Name2}. I live in ${city1}, and my hobby is ${hobby}.`,
);

//16

console.log(typeof ("Hello" + 100)); //string
console.log(typeof (100 + true)); //number

//17
let value = "500";

let number = Number(value);

console.log(number + 100); // 600

//18
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("JavaScript")); // true
