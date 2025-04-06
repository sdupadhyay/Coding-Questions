Promise.resolve(1)
  .then((val) => {
    console.log(val); //1
    return val + 1;
  })
  .then((val) => {
    console.log(val); //2
  })
  .then((val) => {
    console.log(val); // undefined
    return Promise.resolve(3).then((val) => {
      console.log(val); // 3
    });
  })
  .then((val) => {
    console.log(val); // undefined
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val); // 4
  })
  .finally((val) => {
    console.log(val); // undefined
    return 10;
  })
  .then((val) => {
    console.log(val); // undefined
  });

//   Promise.resolve(1) resolves with 1, logging it.
// The next .then() returns 2, which is logged.
// The third .then() receives undefined because the previous .then() returned nothing. It then resolves 3, which is logged.
// The next .then() receives undefined and returns a rejected promise with 4, which triggers the .catch().
// The .catch() logs 4 and returns undefined.
// The .finally() logs undefined (since it doesn’t receive a value) and returns 10, but it has no effect on the promise.
// The last .then() logs undefined because the promise chain is handled by the catch().
