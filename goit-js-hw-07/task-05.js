// task-05
'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const inputValue = function (event) {
  nameOutput.textContent = event.currentTarget.value;
  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'незнакомец';
  }
}
nameInput.addEventListener('input', inputValue);