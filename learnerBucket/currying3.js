//Create a javascript function that will remember its previously passed values and return the sum of the current and previous value.
const privateCounter = () => {
	let count = 0;
	let temp = (val) => {
		count += val;
		return count;
	};
	return temp;
};
const sum = privateCounter();
console.log(sum(5)); // 5
console.log(sum(10)); // 15
console.log(sum(2)); // 17
