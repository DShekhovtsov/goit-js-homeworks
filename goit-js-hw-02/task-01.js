// task-01
"use strict";

let item;
const logItems = function (array) {
  for (item of array) {
    item = (array.indexOf(item) + 1) + ' - ' + item;
    console.log(item);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);