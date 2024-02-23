'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //Sorting the moements
  const movSort = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movSort.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${intrest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  //Dispaly Movements
  displayMovements(acc.movements);
  //Display Balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};

////Event Handlers
// Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    labelWelcome.textContent = `Welacome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear input Field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
    console.log('LOGIN');
  }
});

//Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => {
    return acc.username === inputTransferTo.value;
  });
  // console.log(amount, receiverAcc);
  //Clear input Field
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer Valid');
    //Doing The transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

//Loan Request
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add Movements
    currentAccount.movements.push(amount);
    //Update the UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//Close Accouunt
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  //Clear input Field
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('Delete');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //Delete Account
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

//Sort Button
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////////////////////
//// Simple Array Methods
let arr = ['1', 'a', 'b', 'c', 'd', 'e'];
// SLICE (Does not mutate the original array)
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(2, arr.length-1));
console.log(arr.slice(-1));
console.log(arr.slice());

//SPLICE (It mutates the original array)
console.log(arr.splice(arr.length-1));
console.log(arr.splice(0,2));
console.log(arr);

//REVERSE It mutates the original array
arr = ['1', 'a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
const arr3 = [...arr2];
console.log(arr2.reverse());
console.log(arr2);
console.log(arr3);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
//or
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(', '))

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: You have deposited ${movement}`);
  } else {
    console.log(
      `Transaction ${i + 1}: You have withdrawn ${Math.abs(movement)}`
    );
  }
}
console.log('   ');

//Using a FOREACH
console.log('------ Using ForEach -------');
console.log('   ');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Transaction ${index + 1}: You have deposited ${movement}`);
  } else {
    console.log(
      `Transaction ${index + 1}: You have withdrawn ${Math.abs(movement)}`
    );
  }
}); 


////////FOREACH on Map and Set
//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
//SET
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});


/////// CHALLANGE
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia]; // dogsJulia.slice()
  dogsJuliaCopy.splice(-2);
  dogsJuliaCopy.splice(0, 1);
  console.log(dogsJuliaCopy);

  const kateAjulia = [...dogsJuliaCopy, ...dogsKate]; // dogsJuliaCopy.concat(dogsKate)

  kateAjulia.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and it's ${age}`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy`);
    }
  });
};
// console.log(`---- DATA 1 ----`)
// checkDogs([3,5,2,12,7], [4,1,15,8,3]);
// console.log(`---- DATA 2 ----`)
// checkDogs([9,16,6,8,3], [10,5,6,1,4]);


////////MORE ARRAY METHODS
//    Map (New and MORDERN WAY)   //
const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => Math.round(mov * euroToUsd));

// const movementsUSD = movements.map(function (mov) {
//   return Math.round(mov * euroToUsd);
// });

console.log(movements);
console.log(movementsUSD);

//using FOR OF
const newMovUSDArr = [];
for (const mov of movements) {
  newMovUSDArr.push(Math.round(mov * euroToUsd));
}
console.log(newMovUSDArr);

const movementDesc = movements.map(
  (mov, i, arr) =>
    `Transaction ${i + 1}: You have ${
      mov > 0 ? 'deposited' : 'withdrawn'
    } ${Math.abs(mov)}`

  // if (mov > 0) {
  //   return `Transaction ${i + 1}: You have deposited ${mov}`;
  // } else {
  //   return `Transaction ${i + 1}: You have withdrawn ${Math.abs(mov)}`;
  // }
);
console.log(movementDesc);
//    Filter    //
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log('---- Deposits ----');
console.log(deposits);
//Using FOR OF
const depositFOR = [];
for (const mov of movements) if (mov > 0) depositFOR.push(mov);
console.log(depositFOR);

const withdrawal = movements.filter((mov, i) => mov < 0);
console.log('---- Withdrawals ----');
console.log(withdrawal);
// Using FOR OF
const withdrawalFOR = [];
for (const mov of movements) if (mov < 0) withdrawalFOR.push(mov);
console.log(withdrawalFOR);

//    Reduce    //
console.log(movements);

// accumulator -> is like a SNOWBALL
// The resuce takes in two major parameters.: 1. the callback function and 2. the initial value of the accumulator
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(
    `Iteration Number ${i}: Accumulator ${acc}, Current Number ${cur}`
  );
  return acc + cur;
}, 0);

console.log(balance);
//Using FOR OF
let balanceFOR = 0;
for (const mov of movements) {
  balanceFOR += mov;
}
console.log(balanceFOR);

//Mzximum Value
const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]);
console.log(max)

////// CHALLANGE 2
// const calcAverageHumanAge = function (ages) {
//   let humanAge = 0;
//   const newHumanAge = [];
//   const filteredAge = ages.filter(function (age, i) {
//     if (age <= 2) {
//       humanAge = 2 * age;
//       newHumanAge.push(humanAge);
//     } else if (age > 2) {
//       humanAge = 16 + age * 4;
//       newHumanAge.push(humanAge);
//     }
//   });
//   console.log(newHumanAge);
//   const finalAge = newHumanAge
//     .map((humA, i) => (humA >= 18 ? humA : ''))
//     .reduce(function (acc, finA) {
//       return (acc += finA) / newHumanAge.length;
//     });
//   console.log(finalAge);
// };
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   const averageAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   console.log(averageAge);
// };

const calcAverageHumanAge = ages => {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(humanAges);
};
 
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const euroToUsd = 1.1;
// //PIPELINE
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositUSD);

//    Find    //

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account)

////Using For Of
// const accountForOf = [];
// for (const acc of accounts) {
//   if (acc.owner === "Jessica Davis") {
//     console.log(account);
//   };
// };
//    Some    //

console.log(movements);
// This Checks only for equality
console.log(movements.includes(-130));
//This can be used to specify a condition
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

//    Every    //
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
// Separate callbacks to be used in different methods.
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//    Flat    //
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [[4, 5, [8, 2], 4], 6], 7, 8];
console.log(arrDeep.flat(2));
console.log(arrDeep.flat(3));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
//Using Chaining
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

//    FlatMap    //
const overallBalanceFM = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceFM);

//    Sort    //
//It mutates the original array. It also does the sorting based on strings.
const owners = ['Mohammad', 'Bashir', 'Tukur', 'Dahiru'];
console.log(owners);
console.log(owners.sort());
console.log(owners);

// return < 0, A, B (Keep Order)
// return > 0, B, A (Switch Order)
//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
//Decending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);

console.log(movements);


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

//Empty arrays + FILL METHODS
const x = new Array(8); // Creates an array with 8 empty elements
console.log(x);

//    Fill    //
x.fill(1, 2, 5); // First, (the number). Second, (the start index). Third, (the end index).
console.log(x);
arr.fill(23, 3, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const w = Array.from({ length: 100 }, (_, i) =>
  Math.round(Math.random() * 100)
);
console.log(w);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/
/////// CHALLANGE
/*
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each  array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
////1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
////2
const dogSara = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSara);
console.log(
  `Sarahs dog is eating ${
    dogSara.curFood > dogSara.recFood ? 'Too much' : 'Recomended Portion'
  }`
);
////3
// const ownersTooMuch = [];
// const ownersEatTooMuch = dogs.map(dog => {
//   if (dog.curFood > dog.recFood) ownersTooMuch.push(dog.owners);
// });
// console.log(ownersTooMuch.join(','));

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooLittle);

////4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

////5
console.log(`${dogs.some(dog => dog.curFood === dog.recFood)}`);

const eatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
////6
const okayAmount = dogs.some(eatingOkay);
console.log(okayAmount);

////7
console.log(dogs.filter(eatingOkay));

////8
const dogsSort = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSort)
