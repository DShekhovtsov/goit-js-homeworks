// task-04
'use strict';

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;
const increment = function () {
  counterValue += 1;
  value.textContent = counterValue;
};
const decrement = function () {
  counterValue -= 1;
  value.textContent = counterValue;
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);