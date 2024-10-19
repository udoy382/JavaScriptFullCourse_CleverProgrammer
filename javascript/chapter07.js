// 07 - Array & Object Exercises

const letterCounter = (phrase) => {
  let result = 0;

  for (const letter in phrase) {
    console.log(Number(letter) + 1);
    result = Number(letter) + 1;
  }

  return { result };
};

// const phrase = prompt("write your phrase");
// console.log(letterCounter(phrase));

const sumArray = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    console.log(number);
    result = result + number;
  }
  return { result };
};

numbers = [1, 2, 3, 4, 5];

// console.log(sumArray(numbers));

// Exercises :

const max = (numbers) => {
  let result = numbers[0];

  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
};

// console.log(max([1, 2, 3, 4, 5, 1, 44, 5]));

const letterFrequency = (phrase) => {
  // letterFrequency('haha') 👉 {'h'2, 'a':2}
  let frequency = {};
  console.log(phrase);
  // make a 'frequency' objects {
  for (letter of phrase) {
    console.log(letter);
    // check if letter exists in frequency
    if (letter in frequency) {
      // incriment the value by +1
      frequency[letter] = frequency[letter] + 1;
    } else {
      frequency[letter] = 1;
    }
    // otherwise, set the value to 1
  }

  return frequency;
};
// console.log(letterFrequency("hahaa"));

// :Note => incremental operators [++, --, +=]

/*
const wordFrequency = (phrase) => {
  let frequency = {};

  const words = phrase.split(" ");

  for (const word of words) {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }

  return frequency;
};

console.log(wordFrequency("lol what lol udoy udoy dipty"));
*/

const wordFrequency = (phrase) => {
  let frequency = {};

  const words = phrase.split(" ");

  return letterFrequency(words);
};

console.log(wordFrequency("lol what lol udoy udoy dipty"));
