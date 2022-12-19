class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  pop(val) {
    if (!this.head) return undefined;
    const tail = this.tail;
    let currentNode = this.head;
    let nextTail = currentNode;
    while (currentNode.next) {
      nextTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length --;
    return currentNode;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length ++;
  }

  shift() {
    if (!this.head) return undefined;

    const prevHead = this.head;
    this.head = prevHead.next;
    this.length --;

    return prevHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    const prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
    this.length ++;

    return this;
  }
}
