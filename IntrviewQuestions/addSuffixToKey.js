// create a function which will add a suffix to all the keys present in an object
// Brideye Software Engineer Frontend
const addSuffixToKeys = (obj, suffixKey) => {
	let newObj = {};
	for (let key in obj) {
		const newKey = key + suffixKey;
		newObj[newKey] = obj[key];
	}
	return newObj;
};
const originalObject = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
};

const suffixedObject = addSuffixToKeys(originalObject, "_data");
console.log(suffixedObject);
