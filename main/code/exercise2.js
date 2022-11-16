const pr0 = Promise.resolve();
const pr1 = pr0.then(() => console.log("A"));
const pr2 = pr1.then(() => console.log("B"));

const pr3 = Promise.resolve();
const pr4 = pr3.then(() => console.log("C"));
const pr5 = pr4.then(() => console.log("D"));

console.log("E");
