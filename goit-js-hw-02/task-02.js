// task-02
"use strict";

let message;
let pricePerWord;
const calculateEngravingPrice = function (message, pricePerWord) {
  let total = 0;
  const words = message.split(' ');

  let word;
  for (word of words) {
    total += pricePerWord;
  }
  return total;
};


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 10)
);
// 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 20)
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120