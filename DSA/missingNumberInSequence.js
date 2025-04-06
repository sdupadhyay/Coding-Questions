export const missingNumber = (arr) => {
  let N = arr.length;
  let expectedSum = (N * (N + 1)) / 2;
  let actualSum = arr?.reduce((acc, ele) => acc + ele, 0);
  return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
