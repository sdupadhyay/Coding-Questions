new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject("error");
})
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
