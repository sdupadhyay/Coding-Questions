Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i);
  }
};
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.myForEach((ele, i) => {
  console.log(ele, i);
});
