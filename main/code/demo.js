const start = Date.now();
function elapsedTimeLog(...args) {
  const elapsedMs = Date.now() - start;
  const sec = Math.floor(elapsedMs / 1000);
  console.log(sec, ...args);
}

function handlerA() {
  elapsedTimeLog("A");
}

function handlerB(...args) {
  elapsedTimeLog(...args);
}

function handlerC() {
  elapsedTimeLog("C");
}

setTimeout(handlerA, 0);
Promise.resolve("val").then(handlerB);
Promise.reject("err").catch(handlerB);
queueMicrotask(handlerC);
elapsedTimeLog("D");
