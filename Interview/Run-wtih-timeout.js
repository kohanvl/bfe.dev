/**
 * Написать функцию run() в которой элементы массива выводятся
 * в консоль последовательно спустя промежуток времени,
 * указанный в атрибуте timeout
 */

const run = (arr) => {
  arr.forEach((el) => setTimeout(() => console.log(el.name), el.timeout));
};

const arr = [
  {name: 'first', timeout: 3000},
  {name: 'second', timeout: 5000},
  {name: 'third', timeout: 2000},
];

run(arr); // third, first, second
