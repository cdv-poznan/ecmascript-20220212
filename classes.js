function PersonFn(name) {
  this.name = name;
}

const p1 = new PersonFn('Adrian1');

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value) {
    console.log('trying to set full name', value);
  }

  sayHello() {
    console.log(`Hello ${this.fullName}!`)
  }
}

const p2 = new Person('Adrian', 'Juszczak');

class Counter {
  static num = 1;

  constructor() {
    Counter.num++;
  }
}

// const c1 = new Counter();
// const c2 = new Counter();

