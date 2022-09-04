// Medium - https://bigfrontend.dev/problem/implement-Promise-any
function any(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    promises.forEach((promise, i) =>
      promise.then(
        (data) => resolve(data), // resolve first promise
        (error) => {
          errors[i] = error;
          if (errors.length === promises.length) {
            // throw if there are no resolved promises
            reject(new AggregateError('No resolved promise', errors));
          }
        },
      ),
    );
  });
}
