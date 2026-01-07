Array.prototype.myReduce = function (cb, initialValue) {
	if (typeof cb != "function") throw new Error("Cb must be Function");
	if (!Array.isArray(this)) throw new Error("Only applicable for Array");
	let acc;
	let startingIndex;
	if (arguments?.length >= 2) {
		acc = initialValue;
		startingIndex = 0;
	}
	if (arguments?.length == 1) {
		acc = this[0] ? this[0] : 0;
		startingIndex = 1;
	}
	for (let i = startingIndex; i < this.length; i++) {
		if (i in this) acc = cb(acc, this[i], i);
	}
	return acc;
};

const arr = [1, 2, 3, 4];
const sum = arr?.myReduce((acc, ele) => acc + ele);
console.log(sum);
