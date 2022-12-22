import { DoublyLinkedLists, Node } from '../../../src/data-structures/doubly-linked-lists';

describe('src/data-structures/doubly-linked-lists/index.js', () => {
  it('Verifies defualt attributes of Node instance', () => {
    const sampleNode = new Node(900);
    expect(sampleNode.val)
      .toEqual(900);
    expect(sampleNode.prev)
      .toEqual(null);
    expect(sampleNode.next)
      .toEqual(null);
  });
  it('Verifies default attributes of DoublyLinkedList instance', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    expect(sampleDoublyLinkedList.length)
      .toEqual(0);
    expect(sampleDoublyLinkedList.head)
      .toEqual(null);
    expect(sampleDoublyLinkedList.tail)
      .toEqual(null);
  });
  it('Verifies functionality of method - Get - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.push(5);
    sampleDoublyLinkedList.push(290);
    sampleDoublyLinkedList.push(12);
    sampleDoublyLinkedList.push(23);
    sampleDoublyLinkedList.push(80);

    expect(sampleDoublyLinkedList.get(1).val)
      .toEqual(290);
    expect(sampleDoublyLinkedList.get(3).val)
      .toEqual(23);

    expect(sampleDoublyLinkedList.get(20))
      .toEqual(undefined);
  });
  it('Verifies functionality of method - Insert - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.push(1);
    sampleDoublyLinkedList.push(2);
    sampleDoublyLinkedList.push(3);
    sampleDoublyLinkedList.insert(456, 0);
    sampleDoublyLinkedList.insert(123, 1);
    sampleDoublyLinkedList.insert(987, 4);

    expect(sampleDoublyLinkedList.get(1).val)
      .toEqual(123);
    expect(sampleDoublyLinkedList.tail.val)
      .toEqual(987);
    expect(sampleDoublyLinkedList.head.val)
      .toEqual(456);
    expect(sampleDoublyLinkedList.length)
      .toEqual(6);
  });
  it('Verifies functionality of method - Pop - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.push(1);
    expect(sampleDoublyLinkedList.pop().val)
      .toEqual(1);
    expect(sampleDoublyLinkedList.length)
      .toEqual(0);
    expect(sampleDoublyLinkedList.head)
      .toEqual(null);
    expect(sampleDoublyLinkedList.tail)
      .toEqual(null);

    sampleDoublyLinkedList.push(10);
    sampleDoublyLinkedList.push(20);
    expect(sampleDoublyLinkedList.pop().val)
      .toEqual(20);
    expect(sampleDoublyLinkedList.length)
      .toEqual(1);
  });
  it('Verifies functionality of method - Push - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.push(1);
    sampleDoublyLinkedList.push(2);
    sampleDoublyLinkedList.push(3);
    expect(sampleDoublyLinkedList.length)
      .toEqual(3);
    expect(sampleDoublyLinkedList.head.val)
      .toEqual(1);
    expect(sampleDoublyLinkedList.tail.val)
      .toEqual(3);
  });
  it('Verifies functionality of method - Remove - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.push(1);
    sampleDoublyLinkedList.push(2);
    sampleDoublyLinkedList.push(3);
    expect(sampleDoublyLinkedList.remove(1).val)
      .toEqual(2);
    expect(sampleDoublyLinkedList.head.val)
      .toEqual(1);
    expect(sampleDoublyLinkedList.tail.val)
      .toEqual(3);
  });
  it('Verifies functionality of method - Set - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.push(1);
    sampleDoublyLinkedList.push(2);
    sampleDoublyLinkedList.push(3);
    sampleDoublyLinkedList.set(123, 0);
    expect(sampleDoublyLinkedList.head.val)
      .toEqual(123);
  });
  it('Verifies functionality of method - Shift - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.push(1);
    sampleDoublyLinkedList.push(2);
    expect(sampleDoublyLinkedList.shift().val)
      .toEqual(1);
    expect(sampleDoublyLinkedList.head.val)
      .toEqual(2);
    expect(sampleDoublyLinkedList.shift().val)
      .toEqual(2);
    expect(sampleDoublyLinkedList.head)
      .toEqual(null);
  });
  it('Verifies functionality of method - Unshift - for DoublyLinkedLists', () => {
    const sampleDoublyLinkedList = new DoublyLinkedLists();
    sampleDoublyLinkedList.unshift(90);
    expect(sampleDoublyLinkedList.head.val)
      .toEqual(90);
    expect(sampleDoublyLinkedList.length)
      .toEqual(1);
    sampleDoublyLinkedList.unshift(20);
    expect(sampleDoublyLinkedList.tail.val)
      .toEqual(90);
    expect(sampleDoublyLinkedList.head.val)
      .toEqual(20);
    expect(sampleDoublyLinkedList.length)
      .toEqual(2);
  });
});
