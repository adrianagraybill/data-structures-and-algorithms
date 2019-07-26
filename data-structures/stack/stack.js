'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.rear = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
  }

  pop() {
    let placeholder = this.top;
    this.top = this.top.next;
    placeholder.next = null;
    return placeholder.value;
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }

}


module.exports = { Stack };
