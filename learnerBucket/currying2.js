//Special Case: Return the value when invoked with empty arguments

const sum = (...args) => {
	const storage = [...args];
	if (storage?.length == 0) {
		return 0;
	} else {
		const temp = (...args) => {
			storage.push(...args);
			if (args.length == 0) {
				return storage?.reduce((acc, ele) => acc + ele, 0);
			} else {
				return temp;
			}
		};
		return temp;
	}
};

const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();
console.log(res, res2, res3, res4, res5, res6);
