const promiseAll = (arr) => {
  let ans = [];
  let resolvePromise = 0;
  return new Promise((resolve, reject) => {
    arr?.forEach((ele, ind) => {
      ele
        .then((res) => {
          ans[ind] = res;
          resolvePromise++;
          if (resolvePromise == arr.length) resolve(ans);
        })
        .catch((err) => reject(err));
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});
const res = promiseAll([promise1, promise2])
  .then((r) => console.log(r))
  .catch((err) => console.log(err));
