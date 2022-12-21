import { Node, Queue } from '../../../src/data-structures/queues/index';

describe('src/data-structures/queues/index.js', () => {
  it('Verifies attributes of default Node instance', () => {
    const node = new Node('Restoring americas estuaries');
    expect(node.next)
      .toEqual(null);
    expect(node.value)
      .toEqual('Restoring americas estuaries');
  });
  it('Verifies response of default Queue instance', () => {
    const queue = new Queue();
    expect(queue.first)
      .toEqual(null);
    expect(queue.last)
      .toEqual(null);
    expect(queue.size)
      .toEqual(0);
  });
  it('Verifies functionality of methods for Queue instances', () => {
    const queue = new Queue();
    queue.enqueue(348);
    queue.enqueue('Keeling Curve');
    queue.enqueue('30 by 30');
    expect(queue.size)
      .toEqual(3);

    const popResponse = queue.dequeue();
    expect(popResponse)
      .toEqual(348);
    expect(queue.size).toEqual(2);
  });
  it('Verifies null response of pop method when no values present in queue', () => {
    const queue = new Queue();
    const response = queue.dequeue();

    expect(response)
      .toEqual(null);
  });
  it('Verifies response of pop method when 1 value is present in the queue', () => {
    const queue = new Queue();
    queue.enqueue('Blue carbon');
    expect(queue.first.value)
      .toEqual('Blue carbon');
    expect(queue.last.value)
      .toEqual('Blue carbon');
    queue.dequeue();
    queue.dequeue();
    console.log('queue', queue);

    expect(queue.first)
      .toEqual(null);
    expect(queue.last)
      .toEqual(null);
  });
});
