'use script';

const Queue = require('../queue.js');

describe('queue tests', () => {

  it('Can create a queue', () => {
    let newQ = new Queue();
    expect(newQ.showQueue()).toStrictEqual([]);
  });

  it('Can enqueue', () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    newQ.enqueue(4);
    expect(newQ.showQueue()).toStrictEqual([1,2,3,4]);
  });

  it('Can dequeue', () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    newQ.enqueue(4);
    newQ.dequeue();
    expect(newQ.dequeue()).toStrictEqual(2);
  });

  it('peeks', () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    newQ.enqueue(4);
    expect(newQ.peek()).toBe(1);
  });

});
