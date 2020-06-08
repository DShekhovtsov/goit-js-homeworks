// task-07
'use strict';

// const fontSize = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');
// const changeFontSize = function () {
//   let size = event.currentTarget.value;
//   text.style.fontSize = `${size}px`;
// }
// fontSize.addEventListener('input', changeFontSize);

const users = [
  {
    name: 'UserName 1',
    id: 1,
    age: 14,
    friends: [],
  },
  {
    name: 'UserName 2',
    id: 2,
    age: 32,
    friends: [1],
  },
  {
    name: 'UserName 3',
    id: 3,
    age: 21,
    friends: [2, 4],
  },
  {
    name: 'UserName 4',
    id: 4,
    age: 53,
    friends: [5, 3, 4],
  },
  {
    name: 'UserName 5',
    id: 5,
    age: 44,
    friends: [3, 5, 1],
  },
  {
    name: 'UserName 6',
    id: 6,
    age: 19,
    friends: [2],
  },
  {
    name: 'UserName 7',
    id: 7,
    age: 56,
    friends: [3, 5, 8, 1],
  },
  {
    name: 'UserName 4',
    id: 8,
    age: 56,
    friends: [1],
  },
];

// const foundedUser = users.find(user => user.name === 'UserName 4');
// console.log(foundedUser);

// const foundedUser1 = users.filter(user => user.name === 'UserName 4')[0];
// console.log(foundedUser1);

// const foundedUser = users.find(user, index) => {
// console.log(index);
//   return user.age > 40;
// }

// const foundedUser1 = users.filter(user => user.name === 'UserName 4')[0];
// console.log(foundedUser1);

const isAdult = users.every(user => user.age > 10);
console.log(isAdult);

const isOldest50 = users.some(user => user.age > 50);
console.log(isOldest50);

// REDUCE
const countOfUsers = users.reduce((accum, item, index, array) => {
  const counter = accum + 1;
  console.log(accum);
  return counter;
}, 0);

console.log(countOfUsers);

// -------------------------SUMM OF AGE
const summOfAge = users.reduce((accum, item, index, array) => {
  return accum + item.age;
}, 0);

console.log(summOfAge);

// -------------------------
const userById = users.reduce((accum, user) => {
  return { ...accum, [user.id]: user };
}, {});

console.log(userById);
// -------------------------
const userByName = users.reduce((accum, user) => {
  return { ...accum, [user.name]: user };
}, {});

console.log(userByName);

// -------------UNIC
const unicUserByName = users.reduce((accum, user, index, array) => {
  if (!accum[user.name]) {
    return { ...accum, [user.name]: user };
  }
  return accum;
}, {});
console.log(unicUserByName);

// _________________________________MAP

const userNamesByMap = users.map(user => user.name);
console.log(userNamesByMap);

// _______________________________REDUCE
const userNamesByReduce = users.reduce(
  (accum, user) => [...accum, user.name],
  [],
);
console.log(userNamesByReduce);

// _____________________________
const userNamesOlder30 = users
  .filter(user => user.age > 30)
  .map(user => user.name);
console.log(userNamesOlder30);

// _______________________________________________
const userNamesOlder30Reduce = users.reduce((accum, user) => {
  if (user.age > 30) {
    return [...accum, user.name];
  }
  return accum;
}, []);
console.log(userNamesOlder30Reduce);

// _______________________________________________
const isAdultByEvery = users.every(user => user.age > 10);
console.log(isAdult);

const isAdultByReduce = users.reduce((accum, user) => {
  // условие
  return accum && user.age > 10;
}, true);
// тру єто результат условия
console.log(isAdultByReduce);

// _____________________
const arrStr = ['d', 'a', 'br'];
const sortedA = arrStr.sort();
console.log(arrStr);

const numbers = [1, 3, 4, 5, 3, 7, 9, 0, 88];
const sortedN = numbers.sort();
console.log(sortedN);
// ____________________________________________________________________
const sortedNum = [...numbers].sort((a, b) => {
  return a - b;
});
console.log(sortedNum);

// __________________________________________________________________
const sortByAge = [...users].sort((a, b) => {
  return a.age - b.age;
});
console.log(sortByAge);
// ___________________________________________________SORT
const sortByLength = [...users].sort((a, b) => {
  return a.friends.length - b.friends.length;
});
console.log(sortByLength);

// _______________________________________________________
const result = [...users]
  .sort((a, b) => {
    return b.friends.length - a.friends.length;
  })
  .filter(user => user.age > 30)
  .map(({ name, id }) => ({ name, id }))
  .reduce((accum, user) => ({ ...accum, [user.id]: user.name }), {});
console.log(result);
