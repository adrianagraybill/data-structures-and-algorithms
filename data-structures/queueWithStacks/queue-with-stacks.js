'use strict';

const Stack = require('../stack/stack.js').Stack;

class PsuedoQueue{
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    let output = this.stack2.pop();
    while(this.stack2.peek()){
      this.stack1.push(this.stack2.pop());
    }
    return output;
  }
}

module.exports = PsuedoQueue;
