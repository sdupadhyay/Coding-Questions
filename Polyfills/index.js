let obj = {
  name: "Test",
  getName() {
    console.log("THIS", this);
    console.log(`My Name is ${this.name}`);
  },
};
setTimeout(obj.getName, 0);
setTimeout(function () {
  obj.getName();
}, 2000);
setTimeout(obj.getName.bind(obj), 1000);
