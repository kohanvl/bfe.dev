/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs) {
  return (cb) => {
    let isHandled = false;
    funcs.forEach((func) => {
      func((error, data) => {
        if (!isHandled) {
          isHandled = true;
          cb(error, data);
        }
      });
    });
  };
}
