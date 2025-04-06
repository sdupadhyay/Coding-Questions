Array.prototype.myMap = function (cb) {
  if (!Array.isArray(this)) throw Error("Only applicable for Array");
  if (typeof cb !== "function") throw Error("Not a valid function");
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const r = arr.myMap((ele, ind) => ele * 2);
console.log(r);
