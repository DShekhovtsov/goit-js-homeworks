// task-05
"use strict";

//Countries
const china = 'Китай';
const chili = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';

//Delivery Price
const chinaDeliveryPrice = 100;
const chiliDeliveryPrice = 250;
const australiaDeliveryPrice = 170;
const indiaDeliveryPrice = 80;
const jamaicaDeliveryPrice = 120;

let input = prompt("Укажите страну доставки товара");
const userChoise = input.toLowerCase();
let message;

switch (userChoise) {
  case china.toLowerCase():
    message = `Доставка в ${china} будет стоить ${chinaDeliveryPrice} кредитов.`
    break;
  case chili.toLowerCase():
    message = `Доставка в ${chili} будет стоить ${chiliDeliveryPrice} кредитов.`
    break;
  case australia.toLowerCase():
    message = `Доставка в ${australia} будет стоить ${australiaDeliveryPrice} кредитов.`
    break;
  case india.toLowerCase():
    message = `Доставка в ${india} будет стоить ${indiaDeliveryPrice} кредитов.`
    break;
  case jamaica.toLowerCase():
    message = `Доставка в ${jamaica} будет стоить ${jamaicaDeliveryPrice} кредитов.`
    break;
  default:
    message = 'В вашей стране доставка не доступна'
    break;
}
alert(message);