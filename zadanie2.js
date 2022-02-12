/*
Zadanie 2
Zaimplementuj funkcję przyjmującą dwie tablice bądź obiekty i łączącą je za pomocą operatora spread. W przypadku przekazania niepoprawnych wartości funkcja powinna rzucać błąd.
*/

function merge(arg1, arg2) {
  if (typeof arg1 === typeof arg2 && typeof arg1 === 'object') {
    if (Array.isArray(arg1) && Array.isArray(arg2)) {
      return [...arg1, ...arg2];
    } else if (!Array.isArray(arg1) && !Array.isArray(arg2)) {
      return {...arg1, ...arg2};
    } else {
      throw new Error('wrong arguments');
    }
  } else {
    throw new Error('wrong arguments');
  }
}
