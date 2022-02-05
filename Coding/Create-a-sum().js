/**
 * @param {number} num
 */
function sum(num) {
  const total = (num2) => sum(num + num2);
  total.toString = () => num;
  return total;
}
