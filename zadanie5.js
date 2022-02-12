/*
Zadanie 5
Napisz funkcję, która za pomocą Fetch API pobierze z adresu https://reqres.in/api/colors listę kolorów a następnie wyświetli w HTML listę elementów o zwróconych z odpowiedzi serwera kolorach. Nie korzystaj z metody then na obiekcie typu Promise.
*/

async function colorize() {
  // 1. pobranie danych
  const res = await fetch('https://reqres.in/api/colors');
  const {data} = await res.json();

  // 2. iterowanie tablicy
  for (let item of data) {
    const box = document.createElement('div');
    box.style.background = item.color;
    box.style.height = '100px';

    // 3. wyświetlenie danych w HTML
    document.body.appendChild(box);
  }
}
