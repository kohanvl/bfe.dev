type Curry = (fn: (...args: any[]) => any) => (...args: any[]) => any;

const curry: Curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...args2: any[]) => curried(...args, ...args2);
  };
};
