'use strict';

//Selected Score Elements.
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const msg = document.querySelector('.msg');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;
msg.classList.add('hidden');

const init = function () {
  //Starting Conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  msg.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  currentScore = 0;
  activePlayer = 0;
};

init();
//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating Rando Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check For Rolled 1
    if (dice !== 1) {
      //Add Dice to current Score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

//Hold Event Handlers
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add Current Score To Active Player
    scores[activePlayer] += currentScore;
    // console.log(`score--${activePlayer}`);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if score is >= 100, player win. Finish Game.
    if (scores[activePlayer] >= 10) {
      // console.log(`player--${activePlayer}`);
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      console.log(`.winner--msg--${activePlayer}`);
      document
        .querySelector(`.winner--msg--${activePlayer}`)
        .classList.toggle('hidden');
    } else {
      switchPlayer();
    }
  }
  //3. switch to next player
  //   switchPlayer();
});

//New Game
btnNew.addEventListener('click', init);
