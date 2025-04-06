const missingNumber = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let actualSum = 0;
  for (let i = min; i <= max; i++) {
    actualSum += i;
  }
  let arrSum = arr?.reduce((acc, ele) => acc + ele, 0);
  return actualSum - arrSum;
};

console.log(missingNumber([5, 6, 8, 9, 10])); // Output: 7
