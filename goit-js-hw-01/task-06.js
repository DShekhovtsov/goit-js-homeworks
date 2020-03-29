// task-06

"use strict";
let message;
let total = 0;
let input;
do {
  input = prompt('Введите число');
  total += Number(input);
  console.log(Number.isNaN(total));
  console.log(input);
  Number.parseInt(total);
} while (input !== null);
message = `Общая сумма чисел равна ${total}`;
console.log(input);
// if (Number.isNaN(total) === true) {
//   message = 'Было введено не число, попробуйте еще раз';
// }




alert(message);