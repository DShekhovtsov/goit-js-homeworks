// task-07
'use strict';

const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const changeFontSize = function () {
  let size = event.currentTarget.value;
  text.style.fontSize = `${size}px`;
}
fontSize.addEventListener('input', changeFontSize);