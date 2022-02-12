function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum(...numbers);

// console.log(result);

function sum2(...args) {
  console.log(args);
}

// sum2(1, 2, 3);
// sum2(2, 3);
// sum2(1, 2, 3, 4, 5);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arrayElements = [...array1, ...array2];
const arrayOfArrays = [array1, array2];

const person = {
  name: 'Adrian',
  age: 13,
};

const company = {
  nip: 123,
  regon: 'ABC',
};

const entity = {
  ...person,
  ...company,
};

const array3 = array1; // ta sama tablica pod 2 nazwami
const array4 = [...array1]; // zupełnie nowa tablica z wartościami

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  c: 4,
  d: 5,
  e: 6,
};

const obj3 = {...obj1, ...obj2};
const obj4 = {...obj2, ...obj1, e: 7};


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second, ...rest] = array;

console.log(first, second);
console.log(rest);


const f1 = (a, b, c) => {
  console.log(a, b, c);
}

const f2 = (...args) => {
  console.log(args);
}

