Array.prototype.myReverse = function () {
	let mid = Math.floor(this.length / 2);
	for (let i = 0; i < mid; i++) {
		let currentElement = this.length - 1 - i;
		let temp = this[i];
		this[i] = this[currentElement];
		this[currentElement] = temp;
	}
	return this;
};
let arr = [1, 2, 3, 4, 5];
console.log(arr.myReverse());
