Promise.resolve()
  .then(() => console.log("A"))
  .then(() => console.log("B"))
  .then(() => console.log("C"));

Promise.reject()
  .then(() => console.log("D"))
  .catch(() => console.log("E"));
