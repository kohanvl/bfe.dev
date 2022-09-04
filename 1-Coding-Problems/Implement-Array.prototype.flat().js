/**
 * Easy - https://bigfrontend.dev/problem/implement-Array-prototype.flat
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  const flatArr = [];
  arr.forEach((item) => {
    depth && Array.isArray(item)
      ? flatArr.push(...flat(item, depth - 1))
      : flatArr.push(item);
  });
  return flatArr;
}

/* TS
type Func = (arr: Array<any>, depth?: number) => Array<any>;

const flat: Func = function (arr, depth = 1) {
  const flatArr: Array<any> = [];
  arr.forEach((item) => {
    depth && Array.isArray(item)
      ? flatArr.push(...flat(item, depth - 1))
      : flatArr.push(item);
  });
  return flatArr;
};
*/
