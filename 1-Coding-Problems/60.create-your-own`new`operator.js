/**
 * Easy - https://bigfrontend.dev/problem/create-your-own-new-operator
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  const thisObj = Object.create(constructor.prototype);
  const result = constructor.apply(thisObj, args);
  return result || thisObj;
};
