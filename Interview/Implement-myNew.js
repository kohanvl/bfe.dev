/**
 * Написать функцию myNew, чтобы она работала как конструктор, но без вызова new:
 * function Person(name, age) {
 *   this.name = name;
 *   this.age = age;
 * }
 * var person = myNew(Person, "Vasia", 34);
 * console.log(person instanceof Person); // true;
 */

function myNew(func, ...args) {
  let obj = {};
  obj.__proto__ = func.prototype; // устанавливаем прототип
  func.apply(obj, args); // инициализируем свойства
  return obj;
}
