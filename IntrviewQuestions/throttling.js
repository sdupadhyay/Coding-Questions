function throttling(cb, delay) {
  let id = null;
  return function (...args) {
    if (id == null) {
      cb(...args);
      id = setTimeout(() => {
        id = null;
      }, delay);
    }
  };
}

let a = throttling(() => console.log("My Name is Sumit"), 1);
a();
a();
a();
a();
a();
