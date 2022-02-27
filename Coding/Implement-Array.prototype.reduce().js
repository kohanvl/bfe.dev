// Medium - https://bigfrontend.dev/problem/implement-Array-prototype-reduce
// [1,2,3].myReduce((sum, item) => sum + item);
Array.prototype.myReduce = function (...args) {
  if (!this.length && args.length === 1) throw 'Error';
  const func = args[0];
  let initVal = args[1];
  for (let i = 0; i < this.length; i++) {
    // if we don't have initVal
    if (i === 0 && args.length === 1) initVal = this[0];
    else initVal = func(initVal, this[i], i, this);
  }
  return initVal;
};
