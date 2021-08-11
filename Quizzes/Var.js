function foo() {
  console.log(i); // var will hoisted -> i === undefined
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
}

foo(); // undefined, 0, 1, 2
