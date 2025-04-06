Array.prototype.myReverse = function () {
  const mid = Math.floor(this.length / 2);
  for (let i = 0; i < mid; i++) {
    let temp = this[i];
    this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = temp;
  }
  return this;
};
let arr = [1, 2, 3, 4, 5];
console.log(arr.myReverse());
