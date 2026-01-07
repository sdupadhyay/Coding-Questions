Array.prototype.myFilter = function (cb) {
	let ans = [];
	for (let i = 0; i < this.length; i++) {
		let val = cb(this[i], i, this);
		if (val) ans.push(this[i]);
	}
	return ans;
};
