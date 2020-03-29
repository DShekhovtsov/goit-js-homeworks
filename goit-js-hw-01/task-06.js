// task-06

"use strict";
let message;
let total = 0;
let input;
while (input !== null) {
  input = prompt('Введите число');
  total += Number(input);
  message = `Общая сумма чисел равна ${total}`;
  if (Number.isNaN(total) === true) {
    message = 'Было введено не число, попробуйте еще раз';
    break;
  }
}

alert(message);