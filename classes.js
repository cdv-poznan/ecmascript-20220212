class Person {
  name;
  lastname;

  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  get fullname() {
    return `${this.name} ${this.lastname}`;
  }

  set fullname(value) {
    const [name, lastname] = value.split(' ');
    this.name = name;
    this.lastname = lastname;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  }

  sayHelloTo(person) {
    console.log(`${this.name} says "Hello!" to ${person.name}`);
  }
}

const o1 = {};

const p1 = new Person('Adrian', 'Juszczak');
const p2 = new Person('Ala', 'Makota');

class Student extends Person {
  static indexCounter = 1;

  #index;

  constructor(name, lastname) {
    super(name, lastname);
    this.#index = `PO00${Student.indexCounter++}`;
  }

  getStudentIndexNumber() {
    return this.#index;
  }

  static getNextIndexNumber() {
    return Student.indexCounter;
  }
}

const s1 = new Student('A', 'B');
const s2 = new Student('C', 'D');
const s3 = new Student('E', 'F');
