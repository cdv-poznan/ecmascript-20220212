/*
Zadanie 6
Napisz prostą aplikację, która pozwoli na załadowanie i wywołanie wszystkich funkcji eksportowanych z zewnętrznego modułu o podanej przez użytkownika nazwie. Aplikacja powinna obsługiwać błędy ładowania modułów oraz wywołań funkcji.
*/

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('filename');
  const button = document.getElementById('load');

  button.addEventListener('click', () => {
    const fileName = input.value;
    load(fileName);
  });
});

async function load(fileName) {
  try {
    const mod = await import(`/${fileName}`);

    for (let value of Object.values(mod)) {
      if (typeof value === 'function') {
        value();
      }
    }
  } catch (error) {
    console.log('błąd ładowania modułu');
  }
}
