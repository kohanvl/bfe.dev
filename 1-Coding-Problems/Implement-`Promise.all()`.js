/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let len = promises.length;
    if (!len) {
      resolve(result);
      return;
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        result[index] = value;
        len--;
        if (!len) resolve(result);
      }, reject);
    });
  });
}
