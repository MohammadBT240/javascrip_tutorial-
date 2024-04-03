'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////
/////////////////////////////////////////////
/* ////// Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const allSections = document.querySelectorAll('.section'); //Returns a node list
console.log(allSections);

const allButtons = document.getElementsByTagName('button'); //Returns a collection
console.log(allButtons);

console.log(document.getElementsByClassName('button'));

console.log(document.getElementsByClassName('btn'));

////// Creating and Inserting Elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cokies for improved functionality and analytics';
message.innerHTML =
  'We use cokies for improved functionality and analytics <button class="btn btn--close-cookie">Got It!</button>';

// console.log(message);
// header.prepend(message);
// header.append(message);
// header.before(message);
header.after(message);
// header.append(message.cloneNode(true));

////// Deleting Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

////// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); //Only works for inline elements.
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // Works for general element style.
console.log(getComputedStyle(message).height); // Works for general element style.

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
////// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className); //class

logo.alt = 'Beautiful minimalist logo'
//Reading None standard attributes
console.log(logo.designer); // Won't work because 'designer' is not an HTML element attribute
console.log(logo.getAttribute('designer')); // Works to get None Attribute Elements
logo.setAttribute('company', 'MBT');
//Data Attributes
console.log(logo.dataset.versionNumber);
////// Classes
logo.classList.add('c', 'j'); //Can take more that one class
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

  //Don't use because it'll overide all other class names (Allows only one class name)
logo.className = 'testimony'
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1oords = section1.getBoundingClientRect();
  console.log(s1oords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);
});
