if (true) {
  function foo() {
    console.log('BFE') // function declaration is hoisting
  }
}
if (false) {
  function bar() {
    console.log('dev') // function declaration is hoisting
  }
}

foo() // "BFE"
bar() // "dev"
