import { PriorityQueue, Node } from '../../../src/data-structures/priority-queue';

describe('src/data-structures/priority-queue/index.js', () => {
  it('Verifies default attributes of Node instance', () => {
    const sampleNode = new Node(11122, 89);
    expect(sampleNode.priority)
      .toEqual(89);
    expect(sampleNode.value)
      .toEqual(11122);
  });
  it('Verifies default attributes of PriorityQueue instance', () => {
    const samplePriorityQueue = new PriorityQueue();
    expect(samplePriorityQueue.values)
      .toEqual([]);
  });
  it('Verifies functionality of method enqueue - Add items to priority queue AND dequeue - remove itmes from priority queue', () => {
    const samplePriorityQueue = new PriorityQueue();
    let response = samplePriorityQueue.enqueue({ climate: 'change' }, 123);
    expect(response)
      .toEqual([{ priority: 123, value: { climate: 'change' } }]);
    samplePriorityQueue.enqueue({ keeling: 'curve' }, 5);
    samplePriorityQueue.enqueue({ blue: 'carbon' }, 8);
    samplePriorityQueue.enqueue({ rae: 'restoring americas estuaries' }, 2);
    response = samplePriorityQueue.enqueue({ curb: 'emissions' }, 1);
    expect(response)
      .toEqual([
        { priority: 1, value: { curb: 'emissions' } },
        { priority: 2, value: { rae: 'restoring americas estuaries' } },
        { priority: 8, value: { blue: 'carbon' } },
        { priority: 123, value: { climate: 'change' } },
        { priority: 5, value: { keeling: 'curve' } }]);

    response = samplePriorityQueue.dequeue();
    expect(response).toEqual({ priority: 1, value: { curb: 'emissions' } });
    expect(samplePriorityQueue.values)
      .toEqual([
        { priority: 2, value: { rae: 'restoring americas estuaries' } },
        { priority: 5, value: { keeling: 'curve' } },
        { priority: 8, value: { blue: 'carbon' } },
        { priority: 123, value: { climate: 'change' } }]);

    samplePriorityQueue.dequeue();
    samplePriorityQueue.dequeue();
    samplePriorityQueue.dequeue();
    response = samplePriorityQueue.dequeue();
    expect(response)
      .toEqual({ priority: 123, value: { climate: 'change' } });
  });
  it('Verifies response when trying to dequeue from a priority queue with no queue values', () => {
    const samplePriorityQueue = new PriorityQueue();
    const response = samplePriorityQueue.dequeue();
    expect(response)
      .toEqual(undefined);
  });
});
