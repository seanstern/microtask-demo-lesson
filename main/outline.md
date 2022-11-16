## Objectives
### Goals
1. Event loop:
   1. Describe how the event loop processes asynchronous tasks
   2. Utilize above to predict behavior of programs with asynchronous tasks 
2. Microtask queue:
   1. Descibe how the event loop processes asynchronous microtasks
   2. Describe what _common_ js language features enqueue microstasks
   3. Utilize above to predict behvior of programs with asynchronous tasks _and microtasks_
   4. Identify pitfall(s) of microtasks
   5. Identify use case(s) of microtask

### Non-Goals
 - Discuss js environment specific microstask behavior (i.e. node v browser)


## Activities
1. As a group, share [warmup](../warmup/prompt.md) predictions and justifications  _(Goals 1.1, 1.2)_
2. As a group, review: 
  1. event loop's model for processing microtask _(Goal 2.1)_
  2. common js language features that enqueue microtasks _(Goal 2.2)_
3. Individually predict how the following behave; as a group, share predictions and justifications _(Goals 2.1, 2.2, 2.3)_
  - [demo](./code/demo.js)
  - [exercise1](./code/exercise1.js)
  - [exercise2](./code/exercise2.js)
  - [exercise3](./code/exercise3.js)
  - [exercise4](./code/exercise4.js)
4. As a group, use microtasks to stall the event loop _(Goals 2.4)_
5. As a group, identify how microtasks can mitigate issues with [cache-v1](./code/cache-v1.mjs) and [cache-client](./code//cache-client.js) _(Goals 2.5)_

## Resources
- [slides](./resources/slides.pdf)
- [warmup visualization](./resources/warmup-visualization.pdf)
- [demo visualization](./resources/demo-visualization.pdf)

## External Resources
- [The Event Loop @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [Microtask Guide @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)

