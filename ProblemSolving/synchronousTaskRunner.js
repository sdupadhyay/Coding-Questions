class TaskRunner {
	constructor(concurrency = 1) {
		this.tasks = [];
		this.concurrency = concurrency;
		this.runningTask = 0;
		this.completedTask = 0;
	}
	addTask(task) {
		this.tasks.push(task);
	}
	async runNext(res) {
		if (this.tasks.length == 0 && this.runningTask == 0) return res();
		if (this.tasks?.length == 0 || this.runningTask >= this.concurrency) return;
		this.runningTask++;
		const task = this.tasks.shift();
		try {
			await task();
		} catch (err) {
			console.log(`Taks Failed with Error ${err}`);
		} finally {
			this.runningTask--;
			this.completedTask++;
			this.runNext(res);
		}
		this.runNext(res);
	}
	run() {
		return new Promise((res) => {
			for (let i = 0; i < this.concurrency; i++) {
				this.runNext(res);
			}
		});
	}
}
const runner = new TaskRunner(5);

runner.addTask(
	() =>
		new Promise((res) =>
			setTimeout(() => {
				console.log("Task 1");
				res();
			}, 1000),
		),
);

runner.addTask(
	() =>
		new Promise((res) =>
			setTimeout(() => {
				console.log("Task 2");
				res();
			}, 500),
		),
);

runner.addTask(
	() =>
		new Promise((res) =>
			setTimeout(() => {
				console.log("Task 3");
				res();
			}, 700),
		),
);

await runner.run();

console.log("All tasks done!");
