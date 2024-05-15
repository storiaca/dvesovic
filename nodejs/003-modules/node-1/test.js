let person = {
  name: "Danilo",
};

let user = person;

user.car = "Skoda";

console.log(person); // { name: 'Danilo', car: 'Skoda' }

user = {};

console.log(person);
