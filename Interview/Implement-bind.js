// Написать свой bind (полифил)
function bind(func, context) {
  return function (...args) {
    return func.apply(context, args);
  };
}
