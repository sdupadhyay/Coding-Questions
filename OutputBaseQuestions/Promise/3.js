Promise.resolve(1)
  .then(() => 2)
  .then(3)
  .then((value) => value * 3)
  .then(Promise.resolve(4))
  .then(console.log);

//   Promise.resolve(1) creates a promise that resolves with 1, but the next .then() doesn't use it.
// .then(() => 2) returns 2 synchronously, so the next .then() receives 2.
// .then(3) is ignored because it's a value, not a function. The promise resolves to 2.
// .then((value) => value * 3) multiplies 2 by 3, returning 6.
// .then(Promise.resolve(4)) creates a pending promise, but it doesn't affect the flow.
// Finally, console.log logs 6 when the promise resolves.
