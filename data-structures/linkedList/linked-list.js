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
}

let list = new LinkedList();

list.insert(1);
