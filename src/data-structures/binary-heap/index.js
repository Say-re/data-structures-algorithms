// @flow
interface MaxBinaryHeapProps {
  values: Array<number>,
}

export class MaxBinaryHeap {
  values: Array<number>;
  constructor () {
    this.values = [];
  }

  bubbleUp (index: number, parentIndex: number): null {
    if (this.values[parentIndex] >= this.values[index] || parentIndex < 0) return null;
    const temp = this.values[parentIndex];
    this.values[parentIndex] = this.values[index];
    this.values[index] = temp;

    const newIndex = parentIndex;
    const newParentIndex = Math.floor((newIndex - 1) / 2);
    return this.bubbleUp(newIndex, newParentIndex);
  }

  insert (value: number): Array<number> {
    this.values.push(value);
    if (this.values.length === 1) return this.values;

    const indx = this.values.length - 1;
    const parentIndx = Math.floor((indx - 1) / 2);

    this.bubbleUp(indx, parentIndx);
    return this.values;
  }

  pushDown (parentIndex: number, childIndexL: number, childIndexR: number): null {
    const parentValue = this.values[parentIndex];
    const childLeft = this.values[childIndexL];
    const childRight = this.values[childIndexR];
    let newParentIndex = null;
    if ((!childLeft || childLeft === -1 || parentValue > childLeft) && (!childRight || childRight === -1 || parentValue > childRight)) return null;

    if (parentValue < childLeft) {
      this.values[parentIndex] = childLeft;
      newParentIndex = childIndexL;
    }
    if (parentValue < childRight && (newParentIndex === null || childLeft < childRight)) {
      this.values[parentIndex] = childRight;
      newParentIndex = childIndexR;
    }

    if (!newParentIndex) return null;

    this.values[newParentIndex] = parentValue;
    const newChildIndexL = (newParentIndex * 2) + 1;
    const newChildIndexR = (newParentIndex * 2) + 2;
    return this.pushDown(newParentIndex, newChildIndexL, newChildIndexR);
  }

  extractMax (): ?number {
    if (!this.values || this.values.length < 1) return undefined;
    if (this.values.length === 1) return this.values.pop();
    const returnedVal = this.values[0];
    this.values[0] = this.values.pop();

    const parentIndex = 0;
    const childIndexL = (parentIndex * 2) + 1;
    const childIndexR = (parentIndex * 2) + 2;
    this.pushDown(parentIndex, childIndexL, childIndexR);

    return returnedVal;
  }
}

export default MaxBinaryHeap;
