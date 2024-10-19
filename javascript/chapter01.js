// 01 - console.log (JavaScript basics)


console.log("Hello World!");
console.log("Saifur Rahman Udoy");

// Variables :

my_name = "Saifur Rahman Udoy";
console.log(my_name);

sentence = "How are you today ? Nice to see you. Hope you have a greate day!";
console.log(sentence);

// Comments :

// This is JavaScript comment

/*
This is JavaScript
multiple comments
*/

// Operators :

/*
food = 20
tipPercentage = 0.2
// console.log(food);
tipAmount = food * tipPercentage
console.log(tipAmount)
*/

// First JS App :

// [ * / ** + - ]

food = Number(prompt("How much was the food?"));
tipPercentage = Number(prompt("Tip %?")) / 100

tipAmount = food * tipPercentage
total = food + tipAmount

console.log(`Tip amount ${tipAmount}`)
console.log(`Total amount ${total}`)