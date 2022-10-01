// Easy - https://bigfrontend.dev/quiz/let

let a = 1;
(function () {
  let foo = () => a;
  let a = 2;
  console.log(foo()); // 2 - look at the function invocation, not at the function declaration
})();
