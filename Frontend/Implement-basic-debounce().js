/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let finish = null;
  return (args) => {
    clearTimeout(finish);
    finish = setTimeout(() => func(...args), wait);
  };
}
