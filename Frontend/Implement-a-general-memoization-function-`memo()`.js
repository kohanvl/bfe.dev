/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join('_');
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = func.call(this, ...args);
      cache.set(key, result);
      return result;
    }
  };
}
