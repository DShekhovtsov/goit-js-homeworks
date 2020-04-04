// task-05
'use strict';

const checkForSpam = function (message) {
  const firstWord = 'spam';
  const secondWord = 'sale';
  const smallLetters = message.toLowerCase();
  return smallLetters.includes(firstWord) || (smallLetters.includes(secondWord));
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true