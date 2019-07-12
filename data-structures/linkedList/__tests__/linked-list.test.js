'use strict';

const LinkedList = require('../linked-list.js');

it('inserts a node', () => {
  let list = new LinkedList();
  list.insert(1);
  list.insert(2);
  expect(list.head.value).toEqual(2);
});

it('if the value is somewhere within the Linked List', () => {
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  expect(list.includes(1)).toBeTruthy();
});

it('if the value is somewhere within the Linked List', () => {
  let list = new LinkedList();
  list.insert(1);
  list.insert(2);
  expect(list.includes(6)).toBeFalsy();
});

it('returns a strings of all the values in the linked list', () => {
  let list = new LinkedList();
  list.insert('l');
  list.insert('m');
  list.insert('f');
  expect(list.toString()).toEqual('fml');
});

it('appends stuff', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  expect(list.head.next.value).toEqual(3);
});

it('inserts before the value selected', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(4);
  list.append(8);
  list.append(9);
  list.append(1);
  list.insertBefore(8,6);
  expect(list.head.next.next.next.value).toEqual(6);
});

it('inserts after the value selected', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(4);
  list.append(8);
  list.append(9);
  list.append(1);
  list.insertAfter(8,6);
  expect(list.head.next.next.next.next.value).toEqual(6);
});

it('if K is greater than the length of linked list reply undefined', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(55555);
  expect(list.kthFromTheEnd(10)).toBeUndefined();
});

it('if k and the length are the same', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(55555);
  expect(list.kthFromTheEnd(5)).toBeUndefined();
});

it('if not positive the method throws undefinied', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(55555);
  expect(list.kthFromTheEnd(-10)).toBeUndefined();
});

it('deals with a 1 node LL correctly', () => {
  let list = new LinkedList();
  list.append(5);
  expect(list.kthFromTheEnd(0)).toEqual(5);
});

it('Actually returns the thing we want it to (the kth value from the linked list)', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  expect(list.kthFromTheEnd(2)).toBe(3);
});
