// Chapter 08: Arrays Methods
// Lesson 01 - Map()
// Lesson 02: filter()
// Lesson 03: reduce()

// => higher order functions:

// => map

// [1, 2, 3, 4].map(number => console.log(number))
// [1, 2, 3, 4].map(number => console.log(number * 2))

let result = [1, 2, 3, 4].map((number) => number * 2);
console.log(result);

/*
[1, 2, 3, 4].map(number =>{
    console.log(number)
    console.log('haha')
})
*/

// => filter

const filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};

// console.log(filter([1, 2, 3, 3, 4, 5, 6], 3))

const nums = [1, 2, 3, 4, 5, 6, 8, 10];
// console.log(nums.filter(num => num >= 6))

const actors = [
  { name: "jonny", netWorth: 1000000 },
  { name: "udoy", netWorth: 3000000 },
  { name: "hamim", netWorth: 10 },
  { name: "hamim", netWorth: 2000000 },
];

let result2 = actors.filter((actor) => actor.netWorth > 10);
// console.log(result2);

// => reduce
// reduce needs a function:
// reduce loops and gives you back the accumulator:

const nums2 = [1, 2, 3, 6];
const result3 = nums2.reduce(function (prev, curr) {
  // console.log(max)
  return prev + curr;
});
// console.log(result3)

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// const result4 = nums2.reduce((a, b) => a + b);
// const result4 = nums2.reduce(sum);
const result4 = nums2.reduce(multiply);
console.log(result4);
