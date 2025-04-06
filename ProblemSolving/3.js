const splitBunches = (arr) => {
  let ans = [];
  arr?.forEach((ele) => {
    let totalQuantity = ele?.quantity;
    while (totalQuantity != 0) {
      ans.push({
        name: ele?.name,
        quantity: 1,
      });
      totalQuantity--;
    }
  });
  return ans;
};

console.log(
  splitBunches([
    { name: "Grapes", quantity: 3 },
    { name: "Apple", quantity: 2 },
    { name: "Mangaes", quantity: 1 },
  ])
);

// output
// [
//   { name: 'Grapes', quantity: 1 },
//   { name: 'Grapes', quantity: 1 },
//   { name: 'Grapes', quantity: 1 },
//   { name: 'Apple', quantity: 1 },
//   { name: 'Apple', quantity: 1 },
//   { name: 'Mangaes', quantity: 1 }
// ]
