'use strict'

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorArea = document.querySelector(".colorArea");
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

let intervalId = null;

const backgroundChange = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  colorArea.style.background = color;
};

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  intervalId = setInterval(() => backgroundChange(), 1000)
});
stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(intervalId)
});