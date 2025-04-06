class MyPromise {
  constructor(executorFn) {
    this._state = "pending";
    this._sucessCB = [];
    this._errorCB = [];
    this._finallyCB = [];
    this._value = undefined;
    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }
  then(cb) {
    if (this._state === "fulfilled") {
      cb(this._value);
      return this;
    }
    this._sucessCB.push(cb);
    return this;
  }
  catch(cb) {
    if (this._state === "rejected") {
      cb();
      return this;
    }
    this._errorCB.push(cb);
    return this;
  }
  finally(cb) {
    if (this._state !== "pending") {
      cb();
      return this;
    }
    this._finallyCB.push(cb);
    return this;
  }
  rejectorFunction(val) {
    this._state = "rejected";
    this._errorCB?.forEach((cb) => cb(val));
    this._finallyCB?.forEach((cb) => cb());
  }
  resolverFunction(val) {
    this._value = val;
    this._state = "fulfilled";
    this._sucessCB.forEach((cb) => cb(val));
    this._finallyCB?.forEach((cb) => cb());
  }
}

let p = new MyPromise((res, rej) => res("sucess"));
p.then((res) => console.log("Promise Resolved", res))
  .catch((err) => console.log("MY ERRor", err))
  .finally(() => console.log("Finally CB Runned"));
