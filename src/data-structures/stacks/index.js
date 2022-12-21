const class Node = {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack = {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  pop() {
    if(!this.size || this.size === 0) return null;
    const prevFirst = this.first;
    if(this.first === this.last) {
      this.last === null;
    }
    this.first = this.first.next;
    this.size--;
    return prevFirst.value;
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.size || this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
  }
}
