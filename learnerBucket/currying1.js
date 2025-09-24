// check the length length will be given
const sum = (...args) => {
	const storage = [...args];
	if (storage.length === 4) {
		return storage?.reduce((acc, ele) => ele + acc, 0);
	} else {
		const temp = (...args) => {
			storage.push(...args);
			if (storage?.length == 4) {
				return storage.reduce((acc, ele) => ele + acc, 0);
			} else {
				return temp;
			}
		};
		return temp;
	}
};

const res = sum(1, 2, 3, 4);
const res2 = sum(1)(2)(3)(4);
const res3 = sum(1, 2)(3, 4);
const res4 = sum(1, 2, 3)(4);
const res5 = sum(1)(2, 3, 4);
console.log(res, res2, res3, res4, res5);
//all should return 10
