// task-06
'use strict';

const input = document.querySelector('#validation-input');
const noFocus = function () {
  const setLength = Number(input.dataset.length);
  let enteredLength = input.value.length;
  if (setLength === enteredLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  };
}
input.addEventListener('blur', noFocus);