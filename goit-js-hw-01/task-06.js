// task-06

'use strict';
let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`)
    break;
  };

  if (Number(input) >= 0) {
    total += Number(input);
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  }
}