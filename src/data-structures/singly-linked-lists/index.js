// @flow
export class Node {
  val: any;
  next: any;

  constructor (val: any) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  length: number;
  head: any;
  tail: any;

  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get (index: number): null | any {
    if (index < 0 || index >= this.length) return null;

    let selectedNode = this.head;
    for (let i = 0; i < index; i++) {
      selectedNode = selectedNode.next;
    }
    return selectedNode;
  }

  insert (val: any, index: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    const newNode = new Node(val);
    const prevValue = this.get(index - 1);
    if (!prevValue) return false;
    const prevNextVal = prevValue.next;
    newNode.next = prevNextVal;
    prevValue.next = newNode;
    this.length++;
    return true;
  }

  pop (): any {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let nextTail = currentNode;
    while (currentNode.next) {
      nextTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = nextTail;
    this.tail.next = null;
    this.length--;
    return currentNode;
  }

  push (val: any) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  remove (index: number): any {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const node = this.get(index - 1);
    if (!node) return null;
    const removedNode = node.next;
    node.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse (): any {
    if (!this.head) return undefined;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }

  set (val: any, index: number): null | boolean {
    const node = this.get(index);
    if (!node) return null;

    node.val = val;
    return true;
  }

  shift (): any {
    if (!this.head) return undefined;

    const prevHead = this.head;
    this.head = prevHead.next;
    this.length--;

    return prevHead;
  }

  unshift (val: any): any {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    const prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
    this.length++;

    return this;
  }
}
