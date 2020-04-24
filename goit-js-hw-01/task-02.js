// task-02
"use strict";

const total = 100;
const ordered = 20;
let message;

if (ordered <= total) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  message = "На складе недостаточно товаров!";
}

console.log(message);