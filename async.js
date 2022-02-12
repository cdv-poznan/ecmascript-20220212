// Promise

console.log('start');

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done 2!');
  }, 2000);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done 1!');
  }, 5000);
});

// stany obiektu promise
// * pending
// * fulfilled
// * rejected

/*
promise2.then(value => {
  console.log(value);
});

promise1.then(value => {
  console.log(value);
});
*/

// console.log('fetch()', promise);

/*
promise.then(response => {
  const json = response.json();
  json.then(data => {
    console.log('data', data);
  });
});
*/

/*
const promise = fetch('https://reqres.in/api/users/2');
promise
  .then(res => res.json())
  .then(json => json.data)
  .then(console.log);
  */

/*
*/

/*
p2.then(res => res.json()).then(console.log);
p3.then(res => res.json()).then(console.log);
p4.then(res => res.json()).then(console.log);
*/

// czekamy na wszystkie promisy (Promise.all)
/*
const allPromises = Promise.all([p2, p3, p4, promise1]);
console.log(allPromises);
allPromises
  .then(value => {
    console.log('all promises resolved', value);
  })
  .then(() => console.log('koniec?'));
*/

/*
const firstPromsie = Promise.race([p3, p2, p4])
console.log(firstPromsie);

firstPromsie.then(console.log);
*/

// const promise = fetch('https://reqres.in/api/users/2');
// return promise.then(res => res.json());

function getUser0() {
  fetch('https://reqres.in/api/users/2')
    .then(res => res.json())
    .then(json => json.data)
    .then(console.log);
}

async function getUser() {
  const res = await fetch('https://reqres.in/api/users/2');
  const json = await res.json();
  const data = json.data;
  console.log(data);
}

const p2 = fetch('https://reqres.in/api/users/2');
const p3 = fetch('https://reqres.in/api/users/3');
const p4 = fetch('https://reqres.in/api/users/4');

async function getUsers() {
  const allResponse = await Promise.all([p2, p3, p4]);
  console.log(allResponse);
}

getUsers();
