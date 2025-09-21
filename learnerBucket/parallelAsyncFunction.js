const asyncTask = (val) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(val);
		}, 100 * val);
	});
};
const arr = [asyncTask(5), asyncTask(2), asyncTask(3)];
// Method 1 With using CB
/* const asyncParallelExecuter = async (list, cb) => {
	const start = Date.now();
	let ans = [];
	let completed = 0;
	for (let i = 0; i < list.length; i++) {
		list[i]
			.then((res) => {
				ans[i] = res;
			})
			.catch((err) => {
				ans[i] = err;
			})
			.finally(() => {
				completed++;
				if (completed == list.length) {
					console.log("TOTAL Time:", Date.now() - start);
					cb(ans);
				}
			});
	}
};

asyncParallelExecuter(arr, (res) => console.log("res", res));
*/
// Method Using Promise.
const asyncParallelExecuter = (arr) => {
	const start = Date.now();
	let ans = [];
	let taskCompleted = 0;
	return new Promise((resolve) => {
		arr.forEach((ele, ind) => {
			ele
				.then((res) => {
					ans[ind] = res;
				})
				.catch((err) => {
					ans[ind] = err;
				})
				.finally(() => {
					taskCompleted++;
					if (taskCompleted == arr.length) {
						console.log("TOTAL Time:", Date.now() - start);
						resolve(ans);
					}
				});
		});
	});
};
asyncParallelExecuter(arr).then((res) => console.log(res));
