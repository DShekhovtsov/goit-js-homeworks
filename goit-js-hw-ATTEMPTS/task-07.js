'use strict';
let item;
const logItems = function (array) {
  for (item of array) {
    item = (array.indexOf(item) + 1) + ' - ' + item;
    console.log(item)
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


//1) Берем элемент массива и узнаем его индекс
//2) пишем формулу индекс +1 и + остальное
//3) выврдим в консоль
//
//