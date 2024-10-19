// 06 - For Loops

const fruits = ["banana", "orange", "papaya", "mango"];
console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

for (let i = 0; i < fruits.length; i++) {
  console.log(i + 1, fruits[i]);
}

for (const fruit of fruits) {
  console.log(fruit);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

for (const number of numbers) {
  console.log(number * 2);
}

let result = [];
for (const number of numbers) {
  x = number * 2;
  result.push(x);
}

// console.log(result);

const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number ** 2);
  }

  return result;
};

console.log(double(numbers));
