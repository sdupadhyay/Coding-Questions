const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};

const jane = {
  profile: {
    age: 19,
    gender: "Female",
  },
};
function get(obj, str) {
  let arr = str?.split(".");
  let ans = arr.reduce((acc, ele) => {
    return acc && acc[ele] !== undefined ? acc[ele] : undefined;
  }, obj);
  console.log(ans);
}
get(john, "profile.name.firstName"); // 'John'
get(john, "profile.gender"); // 'Male'
get(jane, "profile.name.firstName"); // undefined
