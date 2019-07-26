'use strict';

const PsuedoQueue = require('../queue-with-stacks.js');

describe('queue with stacks', () => {
  it('enqueue', () => {
    let stack = new PsuedoQueue;
    stack.enqueue(1);
    stack.enqueue(2);
    stack.enqueue(3);
    stack.enqueue(4);
    expect(stack.stack1.top.value).toBe(4);
  });

  it('dequeue', () => {
    let stack = new PsuedoQueue;
    stack.enqueue(1);
    stack.enqueue(2);
    stack.enqueue(3);
    stack.enqueue(4);
    expect(stack.dequeue()).toBe(1);
  });

  it('dequeue null', () => {
    let stack = new PsuedoQueue;
    stack.enqueue(1);
    expect(stack.dequeue()).toBe(1);
    expect(stack.dequeue()).toBeFalsy();
  });

});
