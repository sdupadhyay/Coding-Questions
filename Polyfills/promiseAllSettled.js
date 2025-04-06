const promiseAllSettled = (arr) => {
  let ans = [];
  let resolvePromise = 0;
  return new Promise((resolve, reject) => {
    arr?.forEach((ele, ind) => {
      ele
        .then((res) => {
          ans[ind] = { status: "fullfilled", value: res };
          resolvePromise++;
          if (resolvePromise == arr.length) resolve(ans);
        })
        .catch((err) => {
          ans[ind] = { status: "rejected", reason: err };
          resolvePromise++;
          if (resolvePromise == arr.length) resolve(ans);
        });
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});
// Promise.allSettled([promise1, promise2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
const res = promiseAllSettled([promise1, promise2])
  .then((r) => console.log(r))
  .catch((err) => console.log(err));
