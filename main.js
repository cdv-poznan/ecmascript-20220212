// ZMIENNE

const userName = 'Adrian';

const type = 1;

const user = {
  name: userName,
  admin: false,
};

const array = [1, 2, 3, 4];

array[0] = 7; // modyfikacja wewnętrznej wartości

array.sort(); // brak przypisania

// zmienne lokalne
function f1() {
  let a = 7;

  if (true) {
    let a = 1;
    console.log('w ifie', a);
  }

  console.log('poza ifem', a);
}

// zmienne po staremu
function f2() {
  var a = 7;

  if (true) {
    var a = 1;
    console.log('w ifie', a);
  }

  console.log('poza ifem', a);
}

// stałe (tak jak w przypadku `let`)
function f3() {
  const a = 7;

  if (true) {
    const a = 1;
    console.log('w ifie', a);
  }

  console.log('poza ifem', a);
}

// FUNKCJE STRZAŁKOWE

const f4 = function (a, b) {
  return a + b;
};

const f5 = (a, b) => {
  return a + b;
};

const f6 = (a, b) => a + b;

const a2 = [1, 2, 3, 4];

const a3 = a2.map(function (element) {
  return element * 3;
});

const a4 = a2.map(element => element * 3);
const a5 = a2.map(n => n * 3);

const double = n => n * 2;

const createUser1 = userName => {
  return {
    name: userName,
    admin: false,
  };
};

const createUser2 = userName => ({
  name: userName,
});

const o2 = {
  item: function () {
    return this;
  },
};

const o3 = {
  item: () => this,
};

function f9() {
  console.log(arguments); // metadane o argumentach
}

const f10 = () => {
  console.log(arguments); // błąd: brak wartości arguments dla funkcji strzałkowych
}
