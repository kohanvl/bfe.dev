console.log(1 + 2);                // 3 - just sum of two numbers
console.log(1 + + 2);              // 3 - toNumber(2) === +2
console.log(1 + + + 2);            // 3 - same as above
console.log(1 + '2');              // "12" - one of them is string => both convert to string
console.log(1 + + '2');            //  3 - toNumber("2") === +"2" === 2
console.log('1' + 2);              // "12" - '2' converts to string and then concat
console.log('1' + + 2);            // "12" - same as above
console.log(1 + true);             // 2 - implicit toNumber(true) === 1
console.log(1 + + true);           // 2 - explicit toNumber(true) === 1
console.log('1' + true);           // "1true" - 'true' converts to string and then concat
console.log('1' + + true);         // "11" - 'true' to number then to string and concat
console.log(1 + null);             // 1 - toNumber(null) === 0
console.log(1 + + null);           // 1 - same as above
console.log('1' + null);           // "1null" - 'null' converts to string and then concat
console.log('1' + + null);         // "10" - 'null' to number then to string and concat
console.log(1 + undefined);        // NaN - toNumber(undefined) === NaN
console.log(1 + + undefined);      // NaN - same as above
console.log('1' + undefined);      // "1undefined" - 'undefined' converts to string and then concat
console.log('1' + + undefined);    // "1NaN" - 'undefined' to number then to string and concat
console.log('1' + + + undefined);  // "1NaN" - same as above
