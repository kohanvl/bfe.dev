/**
 * Найти сумму всех values:
    const object = {
        value: 4,
        next: [
        { value: 3, next: [{ value: 1, next: []}]},
        { value: 1, next: [],},
        { value: 3, next: [{value: 2, next: []}]},
        ],
    };
    console.log(findSum(object)); // 14
 */

function findSum(obj, sum = 0) {
  sum += obj.value;
  if (obj.next.length) {
    for (let i = 0; i < obj.next.length; i++) {
      sum = findSum(obj.next[i], sum);
    }
  }
  return sum;
}
