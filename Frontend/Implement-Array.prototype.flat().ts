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
