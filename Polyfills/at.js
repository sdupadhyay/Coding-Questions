// It should work with negative numbers
Array.prototype.myAt = function (ind) {
  if (ind >= 0) return this[ind];
  else return this[this.length + ind];
};
const arr = [1, 2, 3, 4];
console.log(arr.myAt(-2));
