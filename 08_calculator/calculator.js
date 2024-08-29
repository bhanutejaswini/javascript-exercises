const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) res += arr[i];

  return res;
};

const multiply = function (arr) {
  let res = 1;

  for (let i = 0; i < arr.length; i++) res *= arr[i];

  return res;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (x) {
  if (x === 0 || x === 1) return 1;
  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
