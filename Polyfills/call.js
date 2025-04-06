Function.prototype.myCall = function (context, ...abc) {
  console.log(abc);
  context.fn = this;
  context.fn(...abc);
};

let obj = {
  name: "Sumit",
  lastName: "Upadhyay",
};
function getName(city) {
  console.log(`My name is ${this.name} ${this.lastName} I am from ${city}`);
}

getName.myCall(obj, "Una", "Gujarat");
