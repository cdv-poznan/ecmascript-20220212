// DESTRUCTURING ASSIGNMENT

const array = [1, 2, 3, 4, 5];

const [item1, item2, item3] = array;

console.log(item1, item2);

console.log(array);

const person = {
  name: 'Adrian',
  age: 12,
  admin: false,
}

const {name: userName, age} = person;

console.log(userName, age);


