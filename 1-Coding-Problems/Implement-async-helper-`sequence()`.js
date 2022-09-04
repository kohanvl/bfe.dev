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
function sequence(funcs) {
  return function (callback, data) {
    let nextFuncIndex = 0;
    const callNextFunc = (data) => {
      // when no more function is to be called
      if (nextFuncIndex === funcs.length) {
        callback(undefined, data);
        return;
      }
      // if error , callback right way
      // if not error, recursively callNextFunc
      const nextFunc = funcs[nextFuncIndex];
      nextFuncIndex++;
      nextFunc((error, newData) => {
        if (error) callback(error, undefined);
        else callNextFunc(newData);
      }, data);
    };
    callNextFunc(data);
  };
}
