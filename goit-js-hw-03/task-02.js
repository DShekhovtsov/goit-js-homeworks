// task-02
'use strict';

let countProps = function (obj) {
  let keys = Object.keys(obj);
  return keys.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({
  name: 'Mango',
  age: 2
})); // 2

console.log(countProps({
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500
})); // 3