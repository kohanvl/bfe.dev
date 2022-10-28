/**
 * @param {Function} func
 * @param {number} wait
 */
// skip some funcs: ─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G  ->  ─A─ ─ ─C─ ─ ─D ─ ─ ─ ─ E─ ─ ─G
function throttle(func, wait) {
  let isThrottled = false;
  let lastAgs = null;

  return (...args) => {
    if (isThrottled) {
      lastAgs = args;
      return;
    }
    // first input now
    func(...args);

    isThrottled = true;
    // next input after wait ms
    setTimeout(() => {
      isThrottled = false;
      if (lastAgs) {
        func(...lastAgs);
        lastAgs = null;
      }
    }, wait);
  };
}

/*
Используется для создания функции originalFn, которая будет вызываться не чаще чем delayMs. 
/ Creates a throttled function that only invokes "originalFn" at most once per every "delayMs" milliseconds
function throttle(originalFn, delayMs) {
  let timeout; // timeout to keep track of the executions
  return (...args) => {
    if (timeout) { // if timeout is set, this is NOT the first execution, so ignore
      return;
    }
    
    / this is the first execution which we need to delay by "delayMs" milliseconds
    timeout = setTimeout(() => {
      originalFn(...args); // call the passed function with all arguments
      timeout = null; // reset timeout so that the subsequent call launches the process anew
    }, delayMs);
  }
}
*/