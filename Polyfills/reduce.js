Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue || this[0];
  let startingIndex = initialValue ? 0 : 1;
  for (let i = startingIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i);
  }
  return acc;
};

const arr = [1, 2, 3, 4];
const sum = arr?.myReduce((acc, ele) => acc + ele);
console.log(sum);
