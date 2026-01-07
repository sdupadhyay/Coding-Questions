Array.prototype.myConcat = function (...arg) {
	let ans = [...this];
	for (let i = 0; i < arg?.length; i++) {
		let val = arg[i];
		if (Array.isArray(val)) ans.push(...val);
		else ans.push(val);
	}
	return ans;
};
let arr = [1, 2, 3];
let a = arr.concat([4, 5, 6], 7, 8, 9, null, undefined);
console.log(a);
