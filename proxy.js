// Negative index value from the array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const myArr = new Proxy(arr, {
  get(target, prop) {
    if (prop < 0) {
      return target[target.length + +prop];
    } else return target[prop];
  },
  set(target, prop, value) {
    if (+prop < 0) target[target.length + +prop] = value;
    else target[prop] = value;
    //return true;
  },
});
console.log(myArr[-1]);
myArr[-1] = 22;
console.log(myArr);
