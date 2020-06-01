// task-02
'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsItems = ingredients.map(item => {
  const tagLi = document.createElement('li');
  tagLi.textContent = item;
  return tagLi;
});
document.querySelector('#ingredients').append(...ingredientsItems);
