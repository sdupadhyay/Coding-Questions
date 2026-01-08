function GroupBy(arr, keyFinder) {
	return arr.reduce((acc, ele) => {
		let newKey =
			typeof keyFinder === "function" ? keyFinder(ele) : ele[keyFinder];
		if (!acc[newKey]) acc[newKey] = [ele];
		else acc[newKey].push(ele);
		return acc;
	}, {});
}
// console.log(GroupBy(["one", "two", "three", "four", "five"], "length"));
const inventory = [
	{ name: "asparagus", type: "vegetables", quantity: 5 },
	{ name: "bananas", type: "fruit", quantity: 0 },
	{ name: "goat", type: "meat", quantity: 23 },
	{ name: "cherries", type: "fruit", quantity: 5 },
	{ name: "fish", type: "meat", quantity: 22 },
];
const result = GroupBy(inventory, ({ type }) => type);
console.log(result);
