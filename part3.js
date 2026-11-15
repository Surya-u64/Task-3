//1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//3
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//4
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//6
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

//7

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

//8

let i1 = 1;
do {
  console.log(i1);
  i1++;
} while (i1 <= 5);

//9

let words = "JAVASCRIPT";
for (let characters of words) {
  console.log(characters);
}

//10
let languages = ["Java", "JavaScript", "Python", "C", "C++"];

for (let lang of languages) {
  console.log(lang);
}

//11
let employeee = {
  name: "Surya",
  age: 24,
  location: "Salem",
  designation: "Developer",
};

for (let key in employeee) {
  console.log(key, ":", employeee[key]);
}

//12

let mobiles = ["Oppo", "Vivo", "Samsung", "Nothing Pro", "Apple", "OnePlus"];

for (let brand of mobiles) {
  console.log(brand);
}
