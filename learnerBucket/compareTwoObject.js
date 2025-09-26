const deepEqual = (object1, object2) => {
	// get object keys of both the object
	const key1 = Object.keys(object1);
	const key2 = Object.keys(object2);
	// check the length of both the key
	if (key1.length != key2.length) return false;
	for (let ele of key1) {
		// get the value of both the key
		const value1 = object1[ele];
		const value2 = object2[ele];
		// check if both the value are object
		const areObject =
			value1 &&
			typeof value1 === "object" &&
			value2 &&
			typeof value2 === "object";
		if (areObject) {
			// deep check again
			if (!deepEqual(value1, value2)) return false;
		}
		// if are not objects
		// compare the values
		else if (!areObject && value1 != value2) return false;
	}
	return true;
};
const obj1 = {
	name: "learnersbucket",
	details: {
		x: [1, 2],
		y: 2,
	},
};
const obj2 = {
	name: "learnersbucket",
	details: {
		y: 2,
		x: [1, 2],
	},
};
console.log(deepEqual(obj1, obj2));
