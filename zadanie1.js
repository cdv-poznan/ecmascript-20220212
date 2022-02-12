/*
Zadanie 1
Napisz skrypt, który pobierze listę użytkowników z adresu https://reqres.in/api/users a następnie na podstawie danych z odpowiedzi z serwera stworzy i wyświetli tablicę obiektów użytkowników zawierającą pola avatar oraz email. Wykorzystaj funkcje strzałkowe i skrócone literały obiektowe.
*/

const req = fetch('https://reqres.in/api/users');

req
  .then(res => res.json())
  .then(json => json.data)
  .then(data => data.map(({email, avatar}) => ({email, avatar})))
  .then(console.log);

/*
const users = [
  {a: 1, b: 2},
  {a: 3, b: 4},
  {a: 5, b: 6},
];
console.log(users);

console.log(users.map(({a, b}) => ({x: a})));

const user = {a: 1, b: 2}
const {a} = user;
*/
