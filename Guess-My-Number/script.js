"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "👌 Correct Number";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value);
*/
////NORMAL////

// let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);
// let score = 20;
// let highscore = 0;
// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess);

//   if (!guess) {
//     //No Input
//     console.log("No Number");
//     document.querySelector(".message").textContent = "Please Insert a Number";
//     // } else if (guess > number) {
//     //   //Guess is too High
//     //   if (score > 1) {
//     //     document.querySelector(".message").textContent = "Go Lower";
//     //     score--;
//     //     document.querySelector(".score").textContent = score;
//     //   } else {
//     //     document.querySelector(".message").textContent = "You Have LOST!!!";
//     //     document.querySelector(".score").textContent = 0;
//     //   }
//     // } else if (number > guess) {
//     //   //Guess is too low
//     //   if (score > 1) {
//     //     document.querySelector(".message").textContent = "Go Higher";
//     //     score--;
//     //     document.querySelector(".score").textContent = score;
//     //   } else {
//     //     document.querySelector(".message").textContent = "You Have LOST!!!";
//     //     document.querySelector(".score").textContent = 0;
//     //   }
//   } else if (guess === number) {
//     //Correct Scenario
//     document.querySelector(".message").textContent = "You Gessed Right!!!";
//     document.querySelector(".number").textContent = number;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }
//   } else if (guess !== number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent =
//         guess > number ? "Go Higher" : "Go Lower";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You Have LOST!!!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   // Restore initial values
//   score = 20;
//   number = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";

//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

////REFRACTORED//////
let number, score, highscore, guess;

function initializeGame() {
  number = generateRandomNumber(20) + 1;
  score = 20;
  highscore = 0;
  guess = 0;
  updateMessage("Start guessing...");
  updateScore(score);
  updateGuess(guess);
  updateNumber("?");
  updateNumber("?");
  updateBackgroundColor("#222");
  updateNumberWidth("15rem");
}

function generateRandomNumber(max) {
  return Math.trunc(Math.random() * max);
}

function updateMessage(message) {
  document.querySelector(".message").textContent = message;
}

function updateScore(newScore) {
  score = newScore;
  document.querySelector(".score").textContent = score;
}

function updateGuess(guess) {
  let guessNumber;
  guessNumber = guess;
  document.querySelector(".guess").textContent = guessNumber;
}

function updateNumber(newNumber) {
  document.querySelector(".number").textContent = newNumber;
}

function updateBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function updateNumberWidth(width) {
  document.querySelector(".number").style.width = width;
}

function checkGuess() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    updateMessage("Please Insert a Number");
  } else if (guess === number) {
    updateMessage("You Guessed Right!!!");
    updateNumber(number);
    updateBackgroundColor("#60b347");
    updateNumberWidth("30rem");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    updateMessage("Go Lower");
    updateScore(score - 1);
  } else if (guess < number) {
    updateMessage("Go Higher");
    updateScore(score - 1);
  }
}

document.querySelector(".check").addEventListener("click", checkGuess);
document.querySelector(".again").addEventListener("click", initializeGame);

// Initialize the game when the page loads
initializeGame();
