'use strict';
/*
const Person = function (firstName, birthYear) {
  //Instace Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //ever create a Methods an object
};

const mohammad = new Person('Mohammad', 2003);
console.log(mohammad);

// 1. A new Empty object {} is created.
// 2. function is CALLED, THIS = {}
// 3. {} is linked to prototype
// 4. fucntion is automatically returned {}

const matilda = new Person('Matilda', 1998);
const Huzzy = new Person('Huzaifa', 1998);
console.log(matilda, Huzzy);
console.log(mohammad instanceof Person);

////Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

mohammad.calcAge();
matilda.calcAge();

console.log(mohammad.__proto__);
console.log(mohammad.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(mohammad));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(mohammad.species, matilda.species);

console.log(mohammad.hasOwnProperty('firstName'));
console.log(mohammad.hasOwnProperty('species'));

console.log(mohammad.__proto__);
console.log(mohammad.__proto__.__proto__);
console.log(mohammad.__proto__.__proto__.__proto__);

const arr = [2, 3, 5, 4, 6, 8, 4, 4, 4, 8, 2, 2, 2, 7];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.log(h1.__proto__);
console.log(h1.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
);

//////// Challange #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acclerate = function () {
   console.log(`${this.make} is moving at ${this.speed += 10} km/h`);
}

Car.prototype.brake = function () {
   console.log(`${this.make} is moving at ${this.speed -= 5} km/h`);
}

const bm = new Car('BMW', 120);
bm.acclerate();
bm.acclerate();
bm.brake();

const mb = new Car('Mercedes', 95);
mb.acclerate();
mb.brake();

///////Classes in Es6
// Class Expression
// const PersonCl = class {};

//class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //INSTANCE Methods
  //Methods Will be added to the prototype proprety
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey! ${this.fullName}`);
  }

  // Adding GETTERS
  get age() {
    return 2037 - this.birthYear;
  }

  // Adding SETTERS
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Adding STATIC Methods
  static hey() {
    console.log(`hey there 👋`);
    console.log(this); // is the constructor method because thats the object its tied to as a prototyoe.
  }
}

const jessica = new PersonCl('Jessica Davis', 1998);
console.log(jessica);
console.log(jessica.age);
jessica.calcAge();
PersonCl.hey();

//Can also add prototype property mannualy
PersonCl.prototype.greet = function () {
  console.log(`Hey! ${this.fullName}`);
};
jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are firsth-class citizen
//3. Classes are executed in strict mode

const account = {
  owner: 'Mohammad',
  movements: [1222, 422, 900, 500, 3000],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 5000;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const Dahiru = Object.create(PersonProto);
console.log(Dahiru);
Dahiru.name = 'Dahiru';
Dahiru.birthYear = 2008;
Dahiru.calcAge();
console.log(Dahiru);

//////// Challange #2
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  acclerate() {
    console.log(`${this.make} is moving at ${(this.speed += 10)} km/h`);
  }

  brake() {
    console.log(`${this.make} is moving at ${(this.speed -= 5)} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(curSpeed) {
   //  return this._speed = 1.6 * curSpeed;
  }
}
const peugoute = new CarCL('Peugoute', 300);
console.log(peugoute);
peugoute.acclerate();
peugoute.speedUS;
peugoute.acclerate();
peugoute.speedUS;
peugoute.speed = 50;
peugoute.speedUS;


const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My nme is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Software Engineer');
mike.introduce();
mike.calcAge();

//////// Inheritance between Es6 classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //INSTANCE Methods
  //Methods Will be added to the prototype proprety
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey! ${this.fullName}`);
  }

  // Adding GETTERS
  get age() {
    return 2037 - this.birthYear;
  }

  // Adding SETTERS
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Adding STATIC Methods
  static hey() {
    console.log(`hey there 👋`);
    console.log(this); // is the constructor method because thats the object its tied to as a prototyoe.
  }
}

class StudentCl extends PersonCl {
  // NOTE: if you don't need any new method,
  // you don't need to write the constructor method
  constructor(fullName, birthYear, course) {
    //This always needs to happen first!. (Supper is the constructor for the parent class)
    super(fullName, birthYear);
    this.course = course;
  }

  calcAge() {
    console.log(`I'm responsible ${2024 - this.birthYear}`);
  }

  introduce() {
    console.log(`My nme is ${this.fullName} and i study ${this.course}`);
  }
}

const mohammad = new StudentCl('Mohammad Bashir', 2012, 'Software Engineering');
mohammad.introduce();
mohammad.greet();
mohammad.calcAge();

*/
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  //1) Public Fields (They are on the instances)
  locale = navigator.language;

  // 2) Private Fileds ()
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // (Using the _ protects the method, but it doesn't mean it can't be accessible from outside)
    this.#pin = pin;
    // this.#movements = [];
    // this.locale = navigator.language;
  }

  //3) Public Methods
  //The methods are the public interface of our methods. (APIs)
  deposit(val) {
    this.#movements.push(val);
    console.log(`Deposited ${val}`);
    return this;
  }

  getMovements() {
    return this.#movements;
  }

  withdrawal(val) {
    this.deposit(-val);
    console.log(`Withdrew ${val}`);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  total() {
    console.log(
      `The total balance is ${this.#movements.reduce(
        (acc, val) => acc + val,
        0
      )}`
    );
  }

  // 4) Private Methods (Currently does not work in any browser)
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Mohammad Bahsir', 'DOL', 1111);
console.log(acc1);
// acc1.movements.push(5000); //Not a good idea at all.
// acc1.movements.push(-5000);
acc1.deposit(4000);
acc1.total();
acc1.withdrawal(2000);
acc1.deposit(400);
acc1.total();
console.log(acc1.getMovements());
// console.log(acc1.#movements);

/////// Method Chaining
acc1.deposit(500).deposit(230).withdrawal(300).requestLoan(200).total();
console.log(acc1.getMovements());

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
///////// Challange #4

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
