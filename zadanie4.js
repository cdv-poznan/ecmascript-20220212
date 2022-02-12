/*
Zadanie 4
Napisz funkcję, która dla podanej w argumencie kolekcji bądź obiektu, zwróci posortowaną tablicę unikalnych wartości z tej kolekcji.
*/

const array = [11, 2, 2, 2, 22, 3];
const set = new Set().add(11).add(2).add(2).add(3);
const map = new Map().set('a', 13).set('b', 2).set('c', 2).set('d', 3);
const object = {
  a: 31,
  b: 2,
  c: 2,
  d: 3
}

function uniq(collection) {
  // 1. get values
  // 1.1 map/set -> .values()
  // 1.2 array -> [...]
  // 1.3 object -> Object.values()

  let values = [];
  if (collection instanceof Map || collection instanceof Set) {
    values = Array.from(collection.values());
  } else if (Array.isArray(collection)) {
    values = [...collection];
  } else if (typeof collection === 'object') {
    values = Object.values(collection)
  }

  // 2. uniq
  const uniqueValues = new Set(values);

  // 3. sort
  const array = Array.from(uniqueValues.values());

  return array.sort((a, b) => a - b);
}
