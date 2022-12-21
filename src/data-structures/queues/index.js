// @flow
export class Node {
  next: any;
  value: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  first: any;
  last: any;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  dequeue(): any {
    if (this.size <= 0) return null;
    const returnVal = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return returnVal.value;
  }

  enqueue(value: any): this {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }
}
