/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
}
