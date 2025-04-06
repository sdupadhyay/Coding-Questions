const uniqueArray = (arr) => {
  const answer = arr?.reduce((acc, ele) => {
    // console.log(acc);
    if (!acc.includes(ele)) {
      acc.push(ele);
      return acc;
    } else {
      return acc;
    }
  }, []);
  return answer;
};

console.log(uniqueArray([1, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 2])); // [1, 2]
console.log(uniqueArray([2, 1, 2])); // [2, 1]
