import { MaxBinaryHeap } from '../../../src/data-structures/binary-heap';

describe('src/data-structures/binary-heap/index.js', () => {
  it('Verifies default attributes of MaxBinaryHeap instance', () => {
    const sampleHead = new MaxBinaryHeap();
    expect(sampleHead.values)
      .toEqual([]);
  });
  it('Verifies functionality of the insert method to bubble up values through the heap', () => {
    const sampleHead = new MaxBinaryHeap();
    sampleHead.insert(10);
    expect(sampleHead.values)
      .toEqual([10]);
    sampleHead.insert(2);
    expect(sampleHead.values)
      .toEqual([ 10, 2 ]);
    sampleHead.insert(8);
    expect(sampleHead.values)
      .toEqual([ 10, 2, 8 ]);
    sampleHead.insert(20);
    expect(sampleHead.values)
      .toEqual([ 20, 10, 8, 2 ]);
    sampleHead.insert(15);
    expect(sampleHead.values)
      .toEqual([ 20, 15, 8, 2, 10 ]);
  });
  it('Verifies functionality of the extractMax method to push down values through the heap', () => {
    const sampleHead = new MaxBinaryHeap();
    sampleHead.insert(10);
    sampleHead.insert(22);
    sampleHead.insert(32);
    sampleHead.insert(20);
    sampleHead.insert(15);
    const response = sampleHead.extractMax();
    expect(response)
      .toEqual(32);
    expect(sampleHead.values)
      .toEqual([ 22, 20, 15, 10 ]);
  });
  it('Verifies edge case handling of extractMax method', () => {
    const sampleHeap = new MaxBinaryHeap();
    let response = sampleHeap.extractMax();
    expect(response)
      .toEqual(undefined);

    sampleHeap.insert(2000);
    response = sampleHeap.extractMax();
    expect(response)
      .toEqual(2000);
  });
});
