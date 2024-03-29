// Medium - https://bigfrontend.dev/problem/implement-Array-prototype-map

Array.prototype.myMap = function(callback, thisObj) {
  const result = [];
  this.forEach((...args) => {
    const index = args[1];
    result[index] = callback.apply(thisObj, args);
  })
  return result;
}
