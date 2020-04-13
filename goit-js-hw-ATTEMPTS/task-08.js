'use strict';

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]
users.pop();
console.log(users); // ["Poly", "Ajax"]
users.unshift('Lux')
console.log(users); // ["Lux", "Poly", "Ajax"]
users.push('Jay', 'Kiwi')
console.log(users); // ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

const userToDelete = 'Ajax';
users.splice(2, 1)
console.log(users); // ["Lux", "Poly", "Jay", "Kiwi"]

const userToInsert = 'Kong';
const insertBefore = 'Jay';
users.splice(2, 0, userToInsert)
console.log(users); // ["Lux", "Poly", "Kong", "Jay", "Kiwi"]