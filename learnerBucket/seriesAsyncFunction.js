const asyncTask = (val) => {
	return new Promise((res) => {
		setTimeout(() => {
			res(val);
		}, 100 * val);
	});
};
const arr = [asyncTask(3), asyncTask(5), asyncTask(7)];
// Method 1
const asyncSeriesExecuter = async (list) => {
	const start = Date.now();
	for (let i = 0; i < list.length; i++) {
		try {
			const res = await list[i];
			console.log(`Start ${i} ${Date.now() - start}`);
			console.log(res);
		} catch (err) {
			console.log("Err", err);
		}
	}
};

// Method 2  using Recursion
// const asyncSeriesExecuter = async (list) => {
// 	const task = list.shift();
// 	task
// 		.then((res) => {
// 			console.log(res);
// 		})
// 		.catch((err) => console.log(err))
// 		.finally(() => {
// 			if (list?.length > 0) asyncSeriesExecuter(list);
// 		});
// };

asyncSeriesExecuter(arr);
