'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  length() {
    let count = 0;
    let current = this.head;
    while(current.next) {
      count ++;
      current = current.next;
    }
    return count;
  }

  isLongerThan(list) {
    return (this.length() > list.length() ?
      true : false );
  }

  // compare(list1, list2) {
  //   return (list1.length() > list2.length() ?
  //     list1 :
  //     list2 );
  // }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string = string + current.value;
      current = current.next;
    }
    return string;
  }

  append(value) {
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
  }

  insertBefore(value, newValue) {
    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, this.next);
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, this.next);
  }

  kthFromTheEnd(k) {
    let current = this.head;
    let counter = 1;
    while (current.next) {
      current = current.next;
      counter++;
    }
    let kth = counter - k;
    if ((kth >= 0) && (kth <= counter)) {
      let newCurrent = this.head;
      let answer;
      for (let i = 0; i < kth; i++) {
        answer = newCurrent.value;
        newCurrent = newCurrent.next;
      }
      return answer;
    }
  }
}

function mergeLists(list1, list2) {

  let longerList;
  let shorterList;

  if (list1.isLongerThan(list2)){
    longerList = list1;
    shorterList = list2;

  } else {
    longerList = list2;
    shorterList = list1;
  }

  let shortCurrent = shorterList.head;
  let longCurrent = longerList.head;

  while (shortCurrent) {

    let shortNext = shortCurrent.next;
    let longNext = longCurrent.next;

    longCurrent.next = shortCurrent;
    shortCurrent.next = longNext;

    shortCurrent = shortNext;
    longCurrent = longNext;
  }
  return longerList.head;
}

module.exports = {LinkedList, mergeLists};
