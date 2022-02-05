/**
 * Medium - https://bigfrontend.dev/problem/implement-curry-with-placeholder
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    if (
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(curry.placeholder) // check placeholder in agrs
    )
      return fn(...args);
    return function (...args2) {
      const pureArgs = args.map(
        (arg) =>
          arg === curry.placeholder && args2.length ? args2.shift() : arg, // replace placeholder to args2
      );
      return curried(...pureArgs, ...args2);
    };
  };
}

curry.placeholder = Symbol();
