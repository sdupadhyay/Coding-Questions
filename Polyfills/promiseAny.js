const promiseAny = (arr) => {
	return new Promise((resolve, reject) => {
		let errCount = 0;
		arr.forEach((ele) => {
			ele
				.then((res) => {
					resolve(res);
				})
				.catch(() => {
					errCount++;
					if (errCount === arr.length)
						reject("AggregateError: All Promise were rejected");
				});
		});
	});
};

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve, rej) =>
	setTimeout(resolve, 100, "quick")
);
const promise3 = new Promise((resolve, rej) =>
	setTimeout(resolve, 500, "slow")
);

const promises = [promise1, promise2, promise3];

promiseAny(promises)
	.then((res) => console.log("MY Custom", res))
	.catch((err) => console.log(err));

//Promise.any(promises).then((value) => console.log(value));
