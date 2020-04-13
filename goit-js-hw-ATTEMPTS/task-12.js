'use strict'
const firstWord = 'spam';
const secondWord = 'sale';
let incWords;
const checkForSpam = function (str) {
  str = str.toLowerCase()
  incWords = str.includes(secondWord.toLowerCase()) || str.includes(firstWord.toLowerCase())
  return incWords
}



console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true