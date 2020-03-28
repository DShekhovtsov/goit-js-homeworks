// task-04

"use strict";
let credits = 23580;
const pricePerDroid = 3000;

let input = prompt("Какое количество дроидов Вы хотели бы приобрести?");
input = Number(input);
console.log(input);

let totalPrice = input * pricePerDroid;

let message;

if (input === 0) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (input < 0) {
  message = 'Введено неверное количество, пожалуйста, попробуй еще раз!';
} else if (totalPrice <= credits) {
  (credits += -totalPrice)
  message = `Вы купили ${input} дроидов, на счету осталось ${credits} кредитов.`;
}
alert(message);