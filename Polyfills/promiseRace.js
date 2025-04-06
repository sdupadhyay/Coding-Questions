const promiseRace = (arr) => {
  return new Promise((resolve, reject) => {
    arr?.forEach((ele, ind) => {
      ele
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 50, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});
const res = promiseRace([promise1, promise2])
  .then((r) => console.log(r))
  .catch((err) => console.log(err));
