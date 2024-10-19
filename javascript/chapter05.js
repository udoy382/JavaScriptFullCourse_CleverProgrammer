// 05 - Object

const person = {
  name: "Leonardo",
  shirt: "White",
};

console.log(person);
console.log(person.name);
console.log(person.shirt);

console.log(person["name"]);
console.log(person["shirt"]);

person.phone = "01782299436";

console.log(person);

const person2 = {
  name: "Qazi",
  shirt: "Black",
};

console.log(person2);

console.log(person2.name);
console.log(person2.shirt);

console.log(person2["name"]);
console.log(person2["shirt"]);

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liability: 40000,
    netWroth: function () {
        return this.assets - this.liability
    }
  };

  const netWorth2 = () => {
    const total = person.assets - person.liability;
    return total;
  };

  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${
    person.shirt
  } and my net worth is ${netWorth2()}`;

  return intro;
};

console.log(introducer("Udoy", "Black"));
console.log(introducer("Dipty", "Pink"));
