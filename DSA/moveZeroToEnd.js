const moveZeroToEnd = (arr) => {
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[pointer] = arr[i];
      pointer++;
    }
  }
  while (pointer < arr.length) {
    arr[pointer] = 0;
    pointer++;
  }
  return arr;
};

console.log(moveZeroToEnd([0, 1, 0, 1, 2, 3, 4, 0, 5]));
