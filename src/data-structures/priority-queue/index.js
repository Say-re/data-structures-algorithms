// @flow

export class Node {
  value: any;
  priority: number;
  constructor (val: any, priority: number) {
    this.value = val;
    this.priority = priority;
  }
}

export class PriorityQueue {
  values: Array<Node>;
  constructor () {
    this.values = [];
  }

  bubbleUp (index: number, parentIndex: number): null {
    if (parentIndex < 0 || this.values[parentIndex].priority <= this.values[index].priority) return null;
    const temp = this.values[parentIndex];
    this.values[parentIndex] = this.values[index];
    this.values[index] = temp;

    const newIndex = parentIndex;
    const newParentIndex = Math.floor(newIndex - 1) / 2;
    return this.bubbleUp(newIndex, newParentIndex);
  }

  enqueue (value: any, priority: number): Array<Node> {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    if (this.values.length === 1) return this.values;

    const index = this.values.length - 1;
    const parentIndex = Math.floor((index - 1) / 2);

    this.bubbleUp(index, parentIndex);
    return this.values;
  }

  pushDown (parentIndex: number, childIndexL: number, childIndexR: number): null {
    const parentNode = this.values[parentIndex];
    const childLeft = this.values[childIndexL];
    const childRight = this.values[childIndexR];
    let newParentIndex = null;
    if ((!childLeft || childLeft.priority === -1 || parentNode.priority < childLeft.priority) && (!childRight || childRight.priority === -1 || parentNode.priority < childRight.priority)) return null;

    if (parentNode.priority > childLeft.priority) {
      this.values[parentIndex] = childLeft;
      newParentIndex = childIndexL;
    }

    if (parentNode.priority > childRight.priority && (newParentIndex === null || childLeft.priority > childRight.priority)) {
      this.values[parentIndex] = childRight;
      newParentIndex = childIndexR;
    }

    if (!newParentIndex) return null;

    this.values[newParentIndex] = parentNode;
    const newChildIndexL = (newParentIndex * 2) + 1;
    const newChildIndexR = (newParentIndex * 2) + 2;
    return this.pushDown(newParentIndex, newChildIndexL, newChildIndexR);
  }

  dequeue (): ?Node {
    if (!this.values || this.values.length < 1) return undefined;
    if (this.values.length === 1) return this.values.pop();
    const highestPriorityItem = this.values[0];
    this.values[0] = this.values.pop();

    const parentIndex = 0;
    const childIndexL = (parentIndex * 2) + 1;
    const childIndexR = (parentIndex * 2) + 2;
    this.pushDown(parentIndex, childIndexL, childIndexR);

    return highestPriorityItem;
  }
}

export default PriorityQueue;
