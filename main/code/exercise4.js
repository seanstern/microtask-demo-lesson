setTimeout(() => console.log("A"), 0);

queueMicrotask(() => {
  queueMicrotask(() => {
    queueMicrotask(() => {
      console.log("B");
    });
    console.log("C");
  });
  console.log("D");
});

console.log("E");
