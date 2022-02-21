/**
 * Medium - https://bigfrontend.dev/problem/throttle-Promises
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
  const result = [];
  return new Promise((resolve, reject) => {
    let runCount = 0;
    const queue = [...funcs];
    function run() {
      while (runCount < max && queue.length) {
        const func = queue.shift();
        runCount++;
        func()
          .then((data) => {
            result.push(data);
            runCount--;
            run();
          })
          .catch((e) => reject(e));
      }
      if (result.length === funcs.length) {
        resolve(result);
      }
    }
    run();
  });
}
