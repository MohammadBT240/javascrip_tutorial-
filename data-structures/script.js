'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const closingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 2,
    mainIndex = 1,
    time = '12:00pm',
    address,
  }) {
    console.log(
      `Order Recievied at ${time} for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered to ${address}`
    );
  },

  //ES6 Enhanced object literals
  closingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is the pasta ingredients ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  ////

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// // /////MAPS: ITERATION
// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct 👌'],
//   [false, 'Try Again 😑'],
// ]);
// console.log(question);

// // Convert oject to map
// console.log(Object.entries(closingHours));
// const hoursMap = new Map(Object.entries(closingHours));
// console.log(closingHours);
// // Quiz App
// console.log(`Question: ${question.get('question')}`);
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Option ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('Your Answer'));
// const answer = 3;
// console.log(answer);

// //Using BOOLEAN Keys
// console.log(question.get(question.get('correct') === answer));

// //Using IF Statements
// const correctAns = question.get('correct');
// if (answer === correctAns) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// //Convert Map To An Array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);



// // /////MAPS: FUNDAMENTALS
// const rest = new Map();
// // rest.set('name', 'Mohammad Bashir');
// // rest.set(1, 'Firenze, Italy');
// // console.log(rest.set(2, 'Lisbon'));

// rest
//   .set('name', 'Mohammad Bashir')
//   .set(1, 'Firenze, Italy')
//   .set(2, 'Lisbon')
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We Open At :D')
//   .set(false, 'We Close at :C');

// console.log(rest);
// console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 2;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// //// Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'pizza',
//   'Pizza',
//   'Rizoto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Mohammad'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Nan-Bread');
// console.log(ordersSet);
// ordersSet.delete('Nan-Bread');
// console.log(ordersSet);
// // ordersSet.clear();
// // console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// //Example
// const staff = [
//   'Waiter',
//   'Manager',
//   'Waiter',
//   'Senior Manager',
//   'Manager',
//   'Waiter',
// ];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(...staff).size);
// console.log(new Set('MohammadBashir').size);

// //////// CODING CHALLANGE #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1)
// // let goalNumber = 1;
// // for (const player of game.scored) {
// //   console.log(`Goal ${goalNumber}: ${player}`);
// //   goalNumber++;
// // }
// // OR
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2)
// const oddsValues = Object.values(game.odds);
// let sum = 0;
// for (const odd of oddsValues) {
//   sum += odd;
// }
// console.log(sum);
// const average = sum / oddsValues.length;
// console.log(average);
// // 3)
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // //////// Looping Objects (Non-Iterables)
// //Property Names
// const prorperties = Object.keys(closingHours);
// console.log(prorperties);
// let closeStr = `We are closed on ${prorperties.length} days:`

// for (const day of Object.keys(closingHours)) {
//   // console.log(day);
//   closeStr += ` ${day},`;
// }
// console.log(closeStr);
// //Property Values
// const values = Object.values(closingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(closingHours);
// console.log(entries)
// //No Destructuring
// for (const x of entries) {
//   // console.log(x);
//   console.log(`On ${x[0]}, we open at ${x[1].open} and close at ${x[1].close}`);
// }
// //WITH Destructuring
// for (const [key, {open, close}] of entries) {
//   // console.log(x);
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

// // /////// Optiional Chaining
// if (restaurant.openingHours && restaurant.openingHours.thu)
//   console.log(restaurant.openingHours.thu);

// //WITH Optional Chaining
// console.log(restaurant.openingHours?.thu?.open);
// //EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, We Open at ${open}`);
// }
// //Methods
// console.log(restaurant.order?.(0, 2) ?? 'Method Does Not Exist');
// console.log(restaurant.orderRice?.(0, 2) ?? 'Method Does Not Exist');

// //Arrays
// const user = [
//   { name: 'Mohammad', email: 'bashtukus@gmail.com' },
//   { name: 'Rolex', email: 'role@gmail.com' },
// ];
// console.log(user[0]?.name ?? 'User Info Does Not Exist')
// console.log(user[3]?.name ?? 'User Info Does Not Exist')

// // /////// FOR OF LOOP
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // You dont need to crreate a code block if displaying only one statement.
// for (const item of menu) {
//   console.log(item);
// }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// for (const items of restaurant.starterMenu) {
//   console.log(items);
// }
// // console.log(menu.entries());

// // //////NULLISH COALESCING
// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 35;
// console.log(guests);
// // Nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 105;
// console.log(guestsCorrect);

// //////Use any datatype, return any datatype ad they can be used for short circuiting.
// //OR
// //Short Circuiting in OR means "If the first value is a truty value, it returns that value without going to the next value"
// console.log("----- OR -----")
// console.log(3 || 'jonas');
// console.log('' || 'mohammad')
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guest1 = restaurant.rolex ? restaurant.rolex : 50;
// console.log(guest1);
// // Using short circuiting.
// const guest2 = restaurant.rolex || 35.00;
// console.log(guest2);

// //OR
// //Short Circuiting in AND returns TRUE only if both the values are truthy values. Else, it returns the first alsy value in the sequence of values to be displayd
// console.log("----- AND -----")
// console.log(0 && 'mohammad');
// console.log(7 && 'mohammad');
// console.log(undefined && 0 && '' && 'Hello' && 23 && null);

// //Practical Examples.
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('flour', 'olives');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'beef', 'cheese');

// //////REST
// // //1) Destructuring.
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizzass, , risottoss, ...othersFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizzass, risottoss, othersFoods);

// //Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekDays);

// // // 2)Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 2, 7, 3, 9);
// add(10, 9, 34, 8);

// restaurant.orderPizza('flour', 'Olives', 'Beef', 'Pepperoni', 'Salt');

// //////Spread Operator
// //the operator is on the right hand side of the assignment operator.
// const arr = [2, 4, 1];
// const badNewArr = [1, 4, arr[0], arr[2]];
// console.log(badNewArr);

// const goodNewArr = [18, 23, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr);
// console.log(1, 2, 4, 3);

// const newMenu = [...restaurant.mainMenu, 'Dan Wake'];
// console.log(newMenu);

// //copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join two or more arrays
// const jointNewMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(jointNewMenu);

// //Iterales: are arrays, strings, maps, sets. BUT NOT objects.
// const str = 'Mohammad';
// const letters = [...str, ' ', 'Tukur'];
// console.log(letters);
// console.log(...letters);

// //Real World Examples.
// const ingredients = [
//   // prompt("lets's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newResturant = {
//   foundedIn: 2023,
//   ...restaurant,
//   founder: 'Mohammad Bashir',
// };
// console.log(newResturant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Marangorheme';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// /////////Destructring Objects
// restaurant.orderDelivery({
//   // time: '12:30pm',
//   // address: '15d Wuse Zone 2',
//   mainIndex: 2,
//   starterIndex: 2,
// })
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tag,
// } = restaurant;
// console.log(restaurantName, hours, tag);

// const {
//   menu: menus = [],
//   starterMenu: starters = [],
//   categorie: category = [],
// } = restaurant;

// console.log(menus, starters);
// //Mutating Object Variables.
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 3 };
// ({ a, b } = obj);
// console.log(a, b);

// ////////Nested Object Destructuring
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c)

// //Destructing Array Functions.
// const arr = [2,5,3];
// const [x,y,z] = arr;
// console.log(x,y,z);

// let [first, ,second] = restaurant.categories
// console.log(first,second);

// //Switching Varriabnles
// [first,second] = [second,first];
// console.log(first, second);
// //Recieve two retunr values from a function.
// console.log(restaurant.order(3,2));
// const [starter, main] = restaurant.order(3,2);
// console.log(starter, main);
// //nested Destructuring
// const nested = [8,2,5,[1,7]]
// const [fstLet, , , [fftLet, sitLet]] = nested;
// console.log(fstLet, fftLet, sitLet);
// //Defaut Value
// const [p=1,q=2,r=3] = [4,9];
// console.log(p,q,r);

// // /////// CODING CHALLANGE #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Messi', 'Pogba', 'Perisich'];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6.
// const printGaols = function (...players) {
//   console.log(`${players.length} goals were scored by ${players}`);
// }
// printGaols('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// //7.
// team1 > team2 && console.log(`Team 1 is likely to win the match`);
// team2 > team1 && console.log(`Team 2 is likely to win the match`);
