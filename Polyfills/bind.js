Function.prototype.myBind = function (context, ...args) {
  context.fn = this;
  return function () {
    context.fn(...args);
  };
};
let obj = {
  name: "Sumit",
  lastName: "Upadhyay",
};
function getName(city) {
  console.log(`My name is ${this.name} ${this.lastName} I am from ${city}`);
}

getName.myBind(obj, "Una")();
getName.bind(obj, "Somanth")();
