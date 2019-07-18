'use strict';

const linkFile = require('../linked-list.js');
const LinkedList = linkFile.LinkedList;
const mergeLists = linkFile.mergeLists;

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

it('if the value is not in the Linked List', () => {
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

it('if k is greater than the length of linked list result is undefined', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  expect(list.kthFromTheEnd(10)).toBeUndefined();
});

it('if k and the length are the same', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(1);
  expect(list.kthFromTheEnd(5)).toBeUndefined();
});

it('if not positive the method throws undefinied', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(7);
  expect(list.kthFromTheEnd(-10)).toBeUndefined();
});

it('deals with a 1 node LL correctly', () => {
  let list = new LinkedList();
  list.append(8);
  expect(list.kthFromTheEnd(0)).toEqual(8);
});

it('Actually returns the thing we want it to (the kth value from the linked list)', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  expect(list.kthFromTheEnd(2)).toBe(3);
});

it('Can check length and compare lengths of two linked lists', () => {
  let list1 = new LinkedList();
  list1.append(10);
  list1.append(11);
  list1.append(12);
  list1.append(13);
  list1.append(14);
  let list2 = new LinkedList();
  list2.append(20);
  list2.append(21);
  list2.append(22);
  expect(list1.isLongerThan(list2)).toBeTruthy();
  expect(list2.isLongerThan(list1)).toBeFalsy();
});

it('checks the head of the merge function result', () => {
  let list1 = new LinkedList();
  list1.append(10);
  list1.append(11);
  list1.append(12);
  list1.append(13);
  let list2 = new LinkedList();
  list2.append(20);
  list2.append(21);
  expect(mergeLists(list1,list2).value).toBe(10);
});

it('checks the zip, when long list is first', () => {
  let list1 = new LinkedList();
  list1.append(10);
  list1.append(11);
  list1.append(12);
  list1.append(13);

  let list2 = new LinkedList();
  list2.append(20);
  list2.append(21);

  let expectedList = [10, 20, 11, 21, 12, 13];

  let current = mergeLists(list1, list2);
  var i = 0;
  while(current.next) {
    console.log(current.value);
    expect(current.value).toBe(expectedList[i]);
    current = current.next;
    i++;
  }
});

it('checks the zip, when the long list is second', () => {
  let list2 = new LinkedList();
  list2.append(10);
  list2.append(11);
  list2.append(12);
  list2.append(13);

  let list1 = new LinkedList();
  list1.append(20);
  list1.append(21);

  let expectedList = [10, 20, 11, 21, 12, 13];

  let current = mergeLists(list1, list2);
  var i = 0;
  while(current.next) {
    console.log(current.value);
    expect(current.value).toBe(expectedList[i]);
    current = current.next;
    i++;
  }
});
