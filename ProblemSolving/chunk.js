function chunk(arr, size = 1) {
  let ans = [];
  let start = 0;
  let end = size - 1;
  let pointer = 0;
  while (pointer != arr.length) {}
}

chunk(["a", "b", "c", "d"]); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
