//Write a function that prints “Hello” after 1 second and
// “World” after 2 seconds, without using setTimeout directly
// Zepto SDE -2 Frontend
function delay(del) {
  return new Promise((resolve) => setTimeout(resolve, del));
}
async function printHelloWorld() {
  await delay(1000);
  console.log("Hello");
  await delay(2000);
  console.log("World");
  //   delay(1000).then(() => console.log("Hello"));
  //   delay(2000).then(() => console.log("World"));
}

printHelloWorld();
