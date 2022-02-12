// KOLEKCJE

const object = {
  a: 1,
  b: 2,
};

const array1 = []; // instanceof Array
const array2 = new Array();

// MAP
const map = new Map();

map.size; // odpowiednik pola `length` tablicy

map.set('a', 1);
map.set(1, 2);
map.set(true, 3);

const symbol1 = Symbol();
const object2 = {};
const fun1 = () => null;

map.set(symbol1, 4);
map.set(object2, 5);
map.set(fun1, 6);

// map.forEach((item, key) => console.log(item, key));

const map2 = new Map();

map2.set('a', 1).set('b', 2).set('c', 3);

map2.delete('b');

// SET

const set = new Set();

set.add(1).add(2).add(3);

set.delete(3);

set.add(object2);
set.add(fun1);

// set.clear(); // czyszczenie wszystkich wartości

// set.forEach(value => console.log(value));

// ARRAY from iterators

Array.from(map.keys());
Array.from(map.values());
Array.from(set.values());

set instanceof Set; // true
map instanceof Map; // true
array1 instanceof Array; // true
