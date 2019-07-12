'use strict';

const Linkedlist = require('./linked-list.js');

test('if K is greater than the length of linked list reply undefined', () => {
  let list = new Linkedlist();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(55555);
  expect(list.kthFromEnd(10)).toBeUndefined();
});

test('if k and the length are the same', () => {
  let list = new Linkedlist();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(55555);
  expect(list.kthFromEnd(5)).toBeUndefined();
});

it('is not positive the method throws undefinied', () => {
  let list = new Linkedlist();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(55555);
  expect(list.kthFromEnd(-10)).toBeUndefined();
});

it('deals with a 1 node LL correctly', () => {
  let list = new Linkedlist();
  list.append(5);
  expect(list.kthFromEnd(0)).toBe(5);
});

it('Actually returns the thing we want it to (the kth value from the linked list)', () => {
  let list = new Linkedlist();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  expect(list.kthFromEnd(2)).toBe(3);
});
