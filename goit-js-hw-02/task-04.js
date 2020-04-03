// task-02
"use strict";

const formatString = function (string) {
  let symbols = string.split('');
  let greatestString = symbols.length;
  for (let i = 0; i < 40; i += 1) {
    if (greatestString > 40) {
      symbols.splice(40, 200, '...');
      symbols.join('');
    }
  }
  return symbols.join('');
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка