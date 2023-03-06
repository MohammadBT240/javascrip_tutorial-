/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x,y;
x = y = 45 - 20 + 10;
console.log(x,y);

const imtisal = "Abdulazeez Pickin";
console.log(imtisal);

console.log(`Mohammad Bashir Tukur 
Studying at Al-hikmah
Learning Programmig at IGS`)

const fname = 'Mohammad';
const job = 'Student';
const school = 'Al Hikmah University Ilorin';
let year = 2022;

console.log(`My name is ${fname}. I am a student of ${school}. I am ${(year - 2003)}`) ;


let markbmi = 28.3;
let johnbmi = 23.9;
console.log(markbmi, johnbmi)

if (markbmi > johnbmi) {
   console.log(`Mark's BMI ${markbmi} is greater than john's BMI ${johnbmi}`)
} else {
   console.log(`john's BMI ${johnbmi} is greater than Mark's BMI ${markbmi}`)
}


const trynum =  "50";
const first = "Momo"

console.log(Number(trynum)- 20);
console.log(String(trynum))
console.log(`Ba${Number(first)}ana`)
console.log('20'-'10'-'5'+10)
console.log('20'+'10'+'5'-10)
console.log(Boolean('undefined'))

let favorite = prompt ("What is you fave food");
let favefood = 'Egusi'
let secfood = 'danwake'
console.log(favorite);

if (favorite == favefood) {
   console.log(`You've got a nice chice`);
} else if(favorite == secfood) {
   console.log(`Thats is a very Good choice `);
}else{
   console.log(`Thats is a very Terrible choice 😒😒`)
}

if (favorite !== favefood) {
   console.log(`Don't you have any other choice`)
}

let havegv = true;
let shouldhl = false;
if (havegv && shouldhl) {
   console.log(`AND`)
}else{
   console.log(`OR`)
}

let dolphins = (96+108+89)/3;
let koalas = (88+91+110)/3;
if (dolphins>koalas) {
   console.log(`Dolphins are the winner of the competition`);
}else if(koalas>dolphins){
   console.log(`Koalas are the winners of this competition`);
}else if(koalas === dolphins || dolphins === koalas){
   console.log(`The result of the competition is a DRAW`);
}

const minReq = 100;
let dolphins = (97+112+101)/3;
let koalas = (109+95+106)/3;
console.log(dolphins, koalas)
if (dolphins>koalas && dolphins>=minReq ){
   console.log(`Dolphins are the winner of the competition`);
}else if(koalas>dolphins && koalas>=minReq){
   console.log(`Koalas are the winners of this competition`);
}else if(koalas === dolphins && (koalas&dolphins >= minReq)){
   console.log(`The result of the competition is a DRAW`);
}else{
   console.log(`None of them has passed the cut-off mark`)
}

let day = '';
switch (day) {
   case 'Monday':
      console.log(`Today is ${day}`)
      break;
   case 'Tuesday':
      console.log(`Today is ${day}`)
      break;
   case 'Wednesday':
      console.log(`Today is ${day}`)
      break;
   case 'Thursday':
      console.log(`Today is ${day}`)
      break;
   case 'Friday':
      console.log(`Today is ${day}`)
      break;
   case 'Saturday':
      console.log(`Today is ${day}`)
      break;
   case 'Sunday':
      console.log(`Today is ${day}`)
      break;

   default:
      console.log(`Input a day pls🙂`)
      break;
}

let num = 14;
num >= 15 ? console.log('Greater💪') : console.log(`Lesser 🤏`)

const age = 18;
const drive = age>=18 ? 'can drive 🙂' : 'Can not drive 😒';
console.log(drive)
console.log(`Mohammad Bashir ${drive}`)

let bill = 275;
let tip = bill>=30 && bill<=300 ? (15/100)*bill : (20/100)*bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip + bill}`)
*/
