const twoSum = (arr, target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (obj[diff] !== undefined) {
      return [obj[diff], i];
    }
    obj[arr[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
