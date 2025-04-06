// arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
// arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

let obj = {};
for (let ele of arr1) {
  if (obj[ele?.id]) {
  } else {
    obj[ele?.id] = ele;
  }
}
for (let ele of arr2) {
  if (obj[ele?.id]) {
    obj[ele?.id] = { ...obj[ele?.id], ...ele };
  } else {
    obj[ele?.id] = ele;
  }
}
const ans = Object?.values(obj)?.sort((a, b) => a?.id - b?.id);
console.log(ans);
