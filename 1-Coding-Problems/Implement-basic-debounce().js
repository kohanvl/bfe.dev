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

/*
Используется для создания функции originalFn, которая вызовется через timeoutMs после наступления последнего события. 
function debounce(originalFn, timeoutMs) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout); // clear timeout every time the function is called
    timeout = setTimeout(() => originalFn(...args), timeoutMs); // call the original function once "timeoutMs" ms after the last call have elapsed
  };
}
*/