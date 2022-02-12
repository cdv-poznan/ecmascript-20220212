/*
Zadanie 3
Napisz funkcję, która wyświetli podany jako argument ciąg znaków w ramce złożonej ze znaku podanego jako drugi argument. Nie korzystaj z operatora konkatenacji stringów.
*/

function print(str = '', sign = '*') {
  const border = sign.repeat(str.length + 4);
  console.log(`${border}
${sign} ${str} ${sign}
${border}`);

}
