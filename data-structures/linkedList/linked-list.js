'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node (value, this.head);
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
      string += current.value;
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

  insertBefore(value,newValue) {
    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, this.next);
  }

  insertAfter(value,newValue) {
    let current = this.head;
    while (current.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, this.next);
  }

  kthFromTheEnd(k) {
    let current = this.head;
    let counter = 1;
    while (current) {
      current = current.next;
      counter++;
    }
    let kth = counter-k;
    let newCurrent = this.head;
    let answer;
    for (let i = 0; i < kth; i++) {
      let answer = newCurrent.value;
      newCurrent = newCurrent.next;
    }
    return answer;
  }
}

let list = new LinkedList();

list.insert(1);

module.exports = Linkedlist;
