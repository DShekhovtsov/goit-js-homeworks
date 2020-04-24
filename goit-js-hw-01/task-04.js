// task-04

"use strict";
let credits = 23580;
const pricePerDroid = 3000;

let input = prompt("Какое количество дроидов Вы хотели бы приобрести?");
let totalPrice = input * pricePerDroid;
let message;
console.log(input);

if (input === null) {
  message = 'Отменено пользователем!';
} else if (isNaN(input)) {
  message = 'Введено неверное количество, пожалуйста, попробуй еще раз!';
} else if (totalPrice <= credits) {
  (credits += -totalPrice)
  message = `Вы купили ${input} дроидов, на счету осталось ${credits} кредитов.`;
} else {
  message = 'Недостаточно средств на счету!';
}
alert(message);