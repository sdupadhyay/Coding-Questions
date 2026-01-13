const flattenObject = (obj, prefix = "") => {
  let output = {};
  for (let key in obj) {
    let val = obj[key];
    // const newKey = prefix == "" ? key : prefix + "." + key;
    const newKey = prefix ? prefix + "." + key : key;
    if (val != null && typeof val == "object") {
      // this case works for array also we have not to make a seperate
      // check for array loop will iterate array also and as key it has index value
      let result = flattenObject(val, newKey);
      output = { ...output, ...result };
    } else {
      output[newKey] = val;
    }
  }
  return output;
};

const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

let a = flattenObject(nested);
console.log(a);
