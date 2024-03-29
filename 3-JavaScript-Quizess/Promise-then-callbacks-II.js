Promise.resolve(1)
  .then((val) => {
    console.log(val); // 1
    return val + 1;
  })
  .then((val) => {
    console.log(val); // 2
  })
  .then((val) => {
    console.log(val); // undefined - there was no return in previous then()
    return Promise.resolve(3).then((val) => {
      console.log(val); // 3
    });
  })
  .then((val) => {
    console.log(val); // undefined - there was no return in previous then()
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val); // 4 - from promise.reject()
  })
  .finally((val) => {
    console.log(val); // undefined - only catch() handles reject value
    return 10;
  })
  .then((val) => {
    console.log(val); // undefined - because last catch() returns nothing
  });
