/**
 * https://bigfrontend.dev/problem/implement-Promise-race
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
const race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => promise.then(resolve, reject));
  });
};
