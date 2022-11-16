# Warm-up

## Goal
Below is a short javascript program. _Without executing the program in the browser or node_, read through it and _predict_ what will be logged when the program is executed. Record your prediction, paying particular attention to both _what_ and _when_ lines will be logged.

## warmup.js
```javascript
function waitSync(delayMs) {
  const waitStart = Date.now();
  while (Date.now() - waitStart < delayMs) {}
}

const start = Date.now();
function elapsedTimeLog(...args) {
  const elapsedMs = Date.now() - start;
  const sec = Math.floor(elapsedMs / 1000);
  console.log(sec, ...args);
}

function handlerA() {
  waitSync(6000);
  elapsedTimeLog("A");
}

function handlerB() {
  elapsedTimeLog("B");
}

setTimeout(handlerA, 1000);
setTimeout(handlerB, 2000);

elapsedTimeLog("C");
```