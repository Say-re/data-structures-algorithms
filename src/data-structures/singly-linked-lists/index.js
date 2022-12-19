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

  get(index) {
    if (index < 0 || index >= length) return null;

    let selectedNode = this.head;
    for (let i = 0; i < index; i++) {
      selectedNode = selectedNode.next;
    }
    return selectedNode;
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

  set(val, index) {
    const node = this.get(index);
    if (!node) return null;

    node.val = val;
    return true;
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
