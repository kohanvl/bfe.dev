function foo() {
  console.log(1);
}
var foo = 2;
function foo() {
  console.log(3);
}
foo(); // TypeError: foo is not a function

/*
  Function declarations take precedence over variable declarations
  Variable assignment takes precedence over function declaration
*/
