// task-06

'use strict';
let input;
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`)
  };

  if (Number(input) >= 0) {
    total += Number(input);
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  }
}