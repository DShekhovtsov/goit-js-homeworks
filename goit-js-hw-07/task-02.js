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

ingredients.forEach(item => {
  const ingredientsUl = document.querySelector("#ingredients");
  const tagLi = document.createElement("li");
  tagLi.textContent = item;
  ingredientsUl.append(tagLi);
});