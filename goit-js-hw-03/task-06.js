// task-06
'use strict';

const products = [{
    name: 'Радар',
    price: 1300,
    quantity: 4
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2
  },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let total = 0;
  for (const product of products) {
    let objList = Object.entries(product)
    let key = objList[0][1];
    let price = objList[1][1];
    let quantity = objList[2][1];
    total = price * quantity;
    if (product.name === productName) {
      return total
    }
  };

}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
console.log(calculateTotalPrice(products, 'Захват')); // 2400