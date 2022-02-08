/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  const len = promises.length;
  if (len === 0) return Promise.resolve([]);
  const result = [];
  let count = 0;
  return new Promise((resolve) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((value) => {
          result[i] = {
            status: 'fulfilled',
            value,
          };
        })
        .catch((reason) => {
          result[i] = {
            status: 'rejected',
            reason,
          };
        })
        .finally(() => {
          count++;
          if (count === len) resolve(result);
        });
    });
  });
}
