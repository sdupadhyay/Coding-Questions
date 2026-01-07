Array.prototype.myFill = function (value, start = 0, end = this.length) {
	if (start < 0) start = this.length + start;
	if (end < 0) end = this.length + end;
	for (let i = start; i < end; i++) {
		this[i] = value;
	}
};

let arr = [1, 2, 3, 4, 5, 6];
arr.myFill(-1, -4, -2);
arr.myFill(0, 2);
console.log(arr);
