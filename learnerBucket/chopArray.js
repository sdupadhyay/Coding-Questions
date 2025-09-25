//Write a function to chop an array into chunks of a given length and return each chunk as an array without modifying the input array.

const chop = (arr, size) => {
	let N = arr.length;
	let i = 0;
	let ans = [];
	while (i < N) {
		ans.push(arr.slice(i, i + size));
		i = i + size;
	}
	return ans;
};
console.log(chop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
