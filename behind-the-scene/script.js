'use strict';
/*
function calcAge(birthYear) {
   const age = 2023 - birthYear;
   function printAge() {
      const output = `${firstName} you are ${age} years old, born in ${birthYear}`
      console.log(output);

      // let generation
      if (birthYear >= 1981 && birthYear <= 1996 ) {
         var generation = `You are a Millenial`
      } else if (birthYear > 1996) {
         var generation = `You are a Gen Z` 
      } else{
         var generation = `Omoh You don old sha`
      }
      console.log(generation);
   }
   printAge();
   return age;
}

const firstName = 'Mohammad';
calcAge(2003);
console.log(me);
console.log(job);
console.log(year);

var me = 'Mohammad';
let job = 'Programmer';
const year = 2023;


console.log(this);

const age = function (birthYear) {
   console.log(2037 - birthYear);
   console.log(this);
}
age(2023);

const arrowAge = birthYear => {
   console.log(this);
}
arrowAge(2020);

const mohammad = {
   year: 2023,
   age: function () {
      console.log(this);
      const currentAge = this.year - 2003;
      console.log(currentAge);
   }
}
mohammad.age();

const dahiru = {
   year: 2030,
};
dahiru.age = mohammad.age;
dahiru.age();

var firstName = 'Tukur';
const mohammad = {
   year: 2023,
   firstName: 'Bashir',
   age: function () {
      console.log(this);
      const currentAge = this.year - 2003;
      console.log(currentAge);

      const self = this;
      //Solutions 1
      // const millenial = function () {
      //    console.log(self)
      //    console.log(self.year >= 2000 && self.year <= 1998);
      // };

      //Solutions 2
      //Using Arrow Funtion, It inherits the 'this' keyword from the parent class.
      const millenial = () => {
         console.log(self)
         console.log(self.year >= 2000 && self.year <= 1998);
      };
      millenial();
   },
   morning: function () {
      console.log(`Hey ${this.firstName} !!`)
   },
   greet: () => console.log(`Hey ${this.firstName} !!`)
}

mohammad.morning();
mohammad.greet();
mohammad.age();

//Arguments KeyWord
const addEspr = function (a,b) {
   console.log(arguments);
   return a + b;
}

addEspr(2,3,5,7,2);

// var addArrow = (a,b) => {
//    console.log(arguments);
//    return a + b
// }

// addArrow(1,3,6,4,5)

// Primitive values
let lastName = 'Saeed'
let oldLastName = lastName;
lastName = 'Tukur';
console.log(lastName, oldLastName)

//Refrence Values
const huraiyra = {
   firstName: 'Huraiyra',
   lastName: 'Saeed',
   age: '20',
   family: [
      'Mohammad',
   ]
};
const marriedHuraiyra = huraiyra;
marriedHuraiyra.lastName = 'Tukur';
console.log('Befor Marriage: ', huraiyra );
console.log('After Marriage: ', marriedHuraiyra);

//Copying Reference Values
//The Object.asign only creates a shallow copy of the intended object (i.e if there is a nested object in the primary object, it the copied value wont change.)
const newHuraiyra = Object.assign({}, huraiyra) ;
newHuraiyra.age = '21';
newHuraiyra.family.push('Dahiru');
console.log(newHuraiyra);
*/