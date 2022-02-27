/**
 * Реализовать функции five, add, one, seven, subtract, two, чтобы отрабатывали вызовы вида:
 * five(add(one())) // 6
 * seven(subtract(two())) // 5
 */

function getNum(func, num) {
  if (typeof func === 'function') return func(num);
  else return num;
}
function add(a) {
  return function (b) {
    return a + b;
  };
}
function subtract(a) {
  return function (b) {
    return b - a;
  };
}
function one(func) {
  return getNum(func, 1);
}
function two(func) {
  return getNum(func, 2);
}
function five(func) {
  return getNum(func, 5);
}
function seven(func) {
  return getNum(func, 7);
}

console.log(five(add(one()))); // 6
console.log(seven(subtract(two()))); // 5
console.log(seven(subtract(two(add(one(add(two()))))))); // 2
