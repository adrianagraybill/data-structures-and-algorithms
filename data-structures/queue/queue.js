class Node {
  constructor(value, previous = null) {
    this.value = value;
    this.previous = previous;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  peek() {
    return this.front.value;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.rear) {
      this.rear.previous = newNode;
    }
    this.rear = newNode;
    if (!this.front) {
      this.front = newNode;
    }
  }

  dequeue() {
    let previousFront = this.front;
    this.front = this.front.previous;
    previousFront.previous = null;
    return previousFront.value;
  }

}

module.exports = Queue;
