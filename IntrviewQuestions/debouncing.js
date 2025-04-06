function debouncing(cb, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb.call(this, ...args);
    }, delay);
  };
}
function printValue(name) {
  console.log("My Name is" + "   " + name + " printend");
}

let a = debouncing(printValue, 1000);
a("Su");
a();
a();
a("Su");
