/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let isThrottled = false;
  let lastAgs = null;

  return (...args) => {
    if (isThrottled) {
      lastAgs = args;
      return;
    }

    func(...args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (lastAgs) {
        func(...lastAgs);
        lastAgs = null;
      }
    }, wait);
  };
}
