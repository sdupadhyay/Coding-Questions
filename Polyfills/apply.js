Function.prototype.myApply = function (context, args) {
  context.fn = this;
  args = args || [];
  context.fn(...args);
};
let obj = {
  name: "Sumit",
  lastName: "Upadhyay",
};
function getName(city, state) {
  console.log(
    `My name is ${this.name} ${this.lastName} I am from ${city} State ${state}`
  );
}

getName.myApply(obj, ["Una", "Gujarat"]);
