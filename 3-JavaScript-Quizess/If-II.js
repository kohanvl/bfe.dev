if (function foo(){ console.log('BFE') }) {
  console.log('dev')
}
foo()

/* 
Code will log:
"dev"
Error
*/
