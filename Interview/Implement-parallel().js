/**
 * Дописать функцию parallel(), которая параллельно выполняет переданные в нее функции
 */
function parallel(functions, callback) {
  functions.forEach((func) => {
    func(callback);
  });
}
const a = function (done) {
  setTimeout(function () {
    done('result a');
  }, 2000);
};
const b = function (done) {
  setTimeout(function () {
    done('result b');
  }, 1000);
};
parallel([a, b], function (results) {
  console.log(results); // ['result b', 'result a']
});
