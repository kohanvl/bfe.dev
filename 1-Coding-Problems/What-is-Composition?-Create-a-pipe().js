/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((res, func) => func(res), arg);
  };
}
