// 03 - Basics of Functions
// => Functions & Tip Calculator

// Lesson 01 - Basics of Functions
// Lesson 02 - Dynamic Functions
// Lesson 03 - Tip Calculator App

// Function :

// -> This is a function called 'sayMyName' and it has no arguments
function sayMyName() {
  console.log("Udoy");
  console.log("Dipty");
}
// sayMyName();

// -> This is a function called 'sayMyName2' and it has one argument
function sayMyName2(name) {
  console.log(name);
}
// sayMyName2('Dipty');

function greeting(name) {
  console.log(`Hi, ${name}, nice you meet you!`);
}
// greeting('Dipty');

function sum(a, b) {
  return a + b;
}
// console.log(sum(10, 20));

function calculateFoodtotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  const total = sum(food, tipAmount)

  return total;
}
// console.log(calculateFoodtotal(300, 20))

// Arrow Function :

// -> Arrow function with explicit return 
const sumArrow = (a, b) => {
    return a + b;
}

console.log(sumArrow(10, 33))

// -> Arrow function with implicit return
const sumArrow2 = (x, y) => x + y;

console.log(sumArrow2(55, 3))