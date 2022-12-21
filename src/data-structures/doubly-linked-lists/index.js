// @flow
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let selectedNode;
    if (index > Math.floor((this.length - 1) / 2)) {
      selectedNode = this.tail;
      let currentIndex = this.length - 1;
      while(currentIndex > index) {
        selectedNode = selectedNode.prev;
        currentIndex--;
      }
    } else {
      selectedNode = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        selectedNode = selectedNode.next;
        currentIndex++;
      }
    }
    return selectedNode;
  }

  insert(val, index) {
    if (index < 0 || index >= this.length) return false;
    if(index === this.length - 1) {
      this.push(val);
      return true;
    }
    if(index === 0) {
      this.unshift(val);
      return true;
    }
    const newNode = new Node(val);
    const prevValue = this.get(index - 1);
    const prevNextVal = prevValue.next;
    newNode.next = prevNextVal;
    newNode.prev = prevValue;
    prevNextVal.prev = newNode;
    prevValue.next = newNode;
    this.length++;
    return true;
  }

  pop() {
    if(!this.head || !this.tail) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const node = this.get(index - 1);
    const removedNode = node.next;
    const nextNode = removedNode.next;
    node.next = nextNode;
    nextNode.prev = node;
    this.length--;
    return removedNode;
  }

  set(val, index) {
    const node = this.get(index);
    if (!node) return null;

    node.val = val;
    return true;
  }

  shift() {
    if (!this.head || this.length === 0) return undefined;
    const removedNode = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const prevHead = this.head;
      this.head = newNode;
      this.head.next = prevHead;
      prevHead.prev = this.head;
    }
    this.length++;
    return this;
  }
}
