let a = 1;
const b = ++a;
const c = a++;
console.log(a); // 3 - 'a' will change after two increments
console.log(b); // 2 - assign 'b' to 'a' AFTER first incrementing
console.log(c); // 2 - assign 'c' to 'a' BEFORE second incrementing
