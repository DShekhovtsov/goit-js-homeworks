// task-05
'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const inputValue = function (event) {
  if (event.currentTarget.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = 'незнакомец';
  }
};
nameInput.addEventListener('input', inputValue);
