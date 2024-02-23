"use strict";
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 5,
  price = 199 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("234GR", 8, 899);
createBooking("234GR", 8);
createBooking("234GR", undefined, 1000);

const flight = "LH123";
const mohammad = {
   name: 'Mohammad Bashir',
   passport: 120039482,
}

const checkIn = function (flightNum, passanger) {
   flightNum = '0329932'
   passanger.name = "Mr. " + passanger.name;
   console.log(`The passengers name is ${passanger.name} and he is taking the flight with this number: ${flightNum}`);
   if (passanger.passport === 120039482) {
      alert(`The passport correct, Passenger has checkeed-In Successfully.`)
   }else{
      alert(`Wrong Passport Nummber`)
   }
}

checkIn(flight, mohammad)
console.log(flight);
console.log(mohammad);

const flightNum = flight;
const passanger = mohammad;

const newPassport = function (person) {
   person.passport = Math.trunc(Math.random() * 1000000000);
}
newPassport(mohammad);

// checkIn(flightNum, mohammad);

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// const words = "This is just a TEST for the current Function";
// console.log(words.toUpperCase());
// console.log(oneWord(words));

const transformer = function (str, fn) {
   console.log(`Original String: ${str}`)
   console.log(`Transforemd String ${fn(str)}`)
   console.log(`Transformed by: ${fn.name}`)
}

transformer("Javascript is the best progamming language", upperFirstWord);
transformer("Javascript is the best progamming language", oneWord);

// JS uses callbbacks all the time
const high5 = function () {
   console.log("👌");
}

document.body.addEventListener('click', high5);
['Jonas', 'Sadeeq', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("Mohammad");
greetHey("Dahiru");
// OR
greet("Good Morning")("Bashir");

//Challange
//Using An Arrow Function
const secGreet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const secGreetHey = secGreet("Evening");
secGreetHey("Mammadu");
secGreet("Good Day")("Tukur");


const MaxAir = {
   airline: 'Max Air',
   iataCode: 'MX',
   bookings: [],
   book(flightNum, name){
      console.log(`${name} has booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`)
      this.bookings.push({flight: `${flightNum}${this.iataCode}`, name})
   },
};
MaxAir.book(239, 'Mohammad Bashir');
MaxAir.book(452, 'Sadeeq Bunu');
console.log(MaxAir.bookings);

const eurowings = {
   airline: 'Eurowings',
   iataCode: 'EW',
   bookings: [],
}

const book = MaxAir.book;
//Does Not Work
// book(23, 'Mohammad Bashir')


//Call Method
book.call(eurowings, 23, 'Mohammad Bashir');
console.log(eurowings);

book.call(MaxAir, 429, 'Nazir Bashir');
console.log(MaxAir);

const flyEmirate = {
   airline: 'Fly Emirates',
   iataCode: 'FEM',
   bookings: [],
}

book.call(flyEmirate, 598, 'Mohammad Bashir');
// console.log(flyEmirate);


//Apply Method
const flightData = [983, 'Aishat Abdulazeez'];
// 01
// book.apply(flyEmirate, flightData);
// console.log(flyEmirate);

//02
//You can just use the spread operator to get the details of the array(Which is bettet and exactly thesame with the apply method)
book.call(flyEmirate, ...flightData);
console.log(flyEmirate);


// Bind Method
const bookEW = book.bind(eurowings);
const bookFE = book.bind(flyEmirate);
const bookMX = book.bind(MaxAir);

bookEW(612, 'Amina Bashir');
console.log(eurowings.bookings)

const bookMX782 = book.bind(MaxAir, 782);
bookMX782('Dahiru Bashir');
bookMX782('Usman Musa');
console.log(MaxAir.bookings)

//With Event Listners
MaxAir.planes = 100;
flyEmirate.planes = 200;
MaxAir.buyPlanes = function () {
   console.log(this);
   this.planes++;
   console.log(this.planes)
};
// MaxAir.buyPlanes();
document.querySelector('.buy').addEventListener('click', MaxAir.buyPlanes.bind(MaxAir));
// I just tried this, turns out you could call a different object name as the 'this' and it will take the function property of the main object.
// document.querySelector('.buy').addEventListener('click', MaxAir.buyPlanes.bind(flyEmirate));

//Partial Application
const addTax = (rate, value) => value + value * (rate/100);
console.log(addTax(10,400));

const addVAT = addTax.bind(null, 7);
// This is essentially meaning: addVAT => value + value * 0.7;

console.log(addVAT(100000));
console.log(addVAT(23500));

//CHALLANGE : useing the Function calling a Function technique
const addTaxRate = function (rate) {
   return function (value) {
      return value + value * (rate/100);
   };
};
const addVAT2 = addTaxRate(7);
console.log(addVAT2(100000));
console.log(addVAT2(23500));


////// // CHALLANGE #1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get the Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(
          "\n"
        )}\n(Write the option number)`
      )
    );
    console.log(answer);

    //Register New Answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


///// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
   console.log('This will never run again');
}
runOnce();

//IIFE
(function () {
   console.log('Thsi is an Immediately Invoked Function');
   const isPrivate = 23
})();

// console.log(isPrivate) // Will never work

(() => console.log('This will ALSO never run again'))();

{
   const isPrivate = 40;
   var notPrivate = 50;
}
// console.log(isPrivate) // Will never work
console.log(notPrivate); //Will work cause it was assigned using VAR



////// // CLOSURES
const secureBooking = function () {
   let passangerCount = 0;

   return function () {
      passangerCount++;
      console.log(`${passangerCount} passengers`);
   };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//Example 1
let f;
 
const g = function () {
   const a = 23;
   f = function () {
      console.log(a * 2);
   };
};

const h = function () {
   const b = 777;
   f = function () {
      console.log(b * 2);
   };
};

g();
f();
console.dir(f);

//Re assigned f
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
   const perGroup = n / 3;

   setTimeout(function () {
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`);
   }, wait * 1000)

   console.log(`Will start boarding in ${wait} seconds`)
}

boardPassengers(180, 3);
*/

/////// CHALLENGE 2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

