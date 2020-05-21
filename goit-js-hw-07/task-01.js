//task-01
'use strict';

const categoriesQuantity = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesQuantity.length} категории`);

const itemsTextAndQuantity = document.querySelectorAll('.item');
itemsTextAndQuantity.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}
  Количество элементов: ${item.lastElementChild.childElementCount}`)
})