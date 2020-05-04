'use strict';

const arr = [1, 2, 4, 5, 3, 5, 2, 3];
const res = arr.filter((item, index, arr) => arr.indexOf(item) === index)