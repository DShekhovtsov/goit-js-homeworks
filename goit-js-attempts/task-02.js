'use strict';


/**
 * () => {} vs function() {}
 * 1. Нема arguments
 * 2. Контекст (this) устанавлюється в момент створення
 * 3. Нема prototype => нема .name
 * 4. Не може бути в ролі конструктора
 * 5. Синтаксис
 */
const users = [{
    name: 'Mango',
    isActive: true
  },
  {
    name: 'Poly',
    isActive: false
  },
  {
    name: 'Ajax',
    isActive: true
  },
];

// Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map(user => user.name);
console.log(names); // ["Mango", "Poly", "Ajax"]