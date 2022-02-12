// STRINGS

const str1 = 'Hello !';
const str2 = "Hello !\nlinia 2\n\nlinia 4\n\n";

const str3 = `Hello !
linia 2

linia 4

`;


function sayHello(greeting, name) {
  console.log(`${greeting} ${name}!`);
}

function format(name, age, admin, config) {
  console.log(`
          Name: ${name}
          Age:  ${age}
          Admin: ${admin}
          Config: ${config}
  `);
}

function f1(n) {
  console.log(`
      ${ n > 5 ? 'asldasdkj' : '00' };
  `)
}

console.log(` >>   ${Math.random()}  << `)

const name = 'Adrian';
const hello = `Hello ${name}!`;
console.log(hello);
