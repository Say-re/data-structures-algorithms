import { SinglyLinkedList, Node } from '../../../src/data-structures/singly-linked-lists';

describe('src/data-structures/singly-linked-lists/index.js', () => {
  it('Verifies defualt attributes of Node instance', () => {
    const sampleNode = new Node(900);
    expect(sampleNode.val)
      .toEqual(900);
    expect(sampleNode.next)
      .toEqual(null);
  });
  it('Verifies default attributes of SinglyLinkedList instance', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();
    expect(sampleSinglyLinkedList.length)
      .toEqual(0);
    expect(sampleSinglyLinkedList.next)
      .toEqual(null);
  });
  it('Verifies functionality of method - Get - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    // Null Response expectations
    let response = sampleSinglyLinkedList.get();
    expect(response).toEqual(null);
    response = sampleSinglyLinkedList.get(-200);
    expect(response).toEqual(null);

    // Successful response
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.push(20);
    sampleSinglyLinkedList.push(49827);
    response = sampleSinglyLinkedList.get(1);
    expect(response.val).toEqual(20);
  });
  it('Verifies functionality of method - Insert - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    // Null Response expectations
    let response = sampleSinglyLinkedList.insert(2304, -1);
    expect(response).toEqual(false);
    response = sampleSinglyLinkedList.insert(-200, 200);
    expect(response).toEqual(false);

    // Successful response at beginning of SinglyLinkedList
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.insert(192, 0);
    response = sampleSinglyLinkedList.get(0);
    expect(response.val).toEqual(192);

    // Successful response to insert at end of SinglyLinkedList
    sampleSinglyLinkedList.insert(89, 2);
    response = sampleSinglyLinkedList.get(2);
    expect(response.val).toEqual(89);

    // Successful response to isnert in middle of SinglyLinkedList
    sampleSinglyLinkedList.insert(100, 2);
    response = sampleSinglyLinkedList.get(2);
    expect(response.val).toEqual(100);
  });
  it('Verifies functionality of method - Pop - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    // Null Response expectations
    let response = sampleSinglyLinkedList.pop();
    expect(response).toEqual(undefined);

    // Successful response
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.push(1980);
    response = sampleSinglyLinkedList.pop();
    expect(response.val).toEqual(1980);
  });
  it('Verifies functionality of method - Push - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    // Successful response
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.push(1980);
    expect(sampleSinglyLinkedList.head.val).toEqual(200);
    expect(sampleSinglyLinkedList.tail.val).toEqual(1980);
  });
  it('Verifies functionality of method - Remove - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    // Null Response expectations
    let response = sampleSinglyLinkedList.remove(-1);
    expect(response).toEqual(undefined);
    response = sampleSinglyLinkedList.remove(2);
    expect(response).toEqual(undefined);

    // Successful response
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.push(100);
    sampleSinglyLinkedList.push(300);
    response = sampleSinglyLinkedList.remove(0);
    expect(response.val).toEqual(200);

    // Successful response to remove last item from SinglyLinkedList
    sampleSinglyLinkedList.push(500);
    sampleSinglyLinkedList.push(600);
    sampleSinglyLinkedList.push(700);
    response = sampleSinglyLinkedList.remove(4);
    expect(response.val).toEqual(700);

    // Successful response to remove item in middle of SinglyLinkedList
    response = sampleSinglyLinkedList.remove(2);
    expect(response.val).toEqual(500);
  });
  it('Verifies functionality of method - Reverse - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    // Successful response
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.push(100);
    sampleSinglyLinkedList.push(300);
    expect(sampleSinglyLinkedList.head.val).toEqual(200);
    expect(sampleSinglyLinkedList.tail.val).toEqual(300);

    sampleSinglyLinkedList.reverse();
    expect(sampleSinglyLinkedList.head.val).toEqual(300);
    expect(sampleSinglyLinkedList.tail.val).toEqual(200);
  });
  it('Verifies functionality of method - Set - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    let response = sampleSinglyLinkedList.set(2);
    expect(response).toEqual(null);

    // Successful response
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.push(100);
    sampleSinglyLinkedList.push(300);

    response = sampleSinglyLinkedList.set(123, 1);
    expect(response).toEqual(true);
    expect(sampleSinglyLinkedList.get(1).val).toEqual(123);
  });
  it('Verifies error response of reverse method if no head is present for SinglyLinkedList', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();
    const response = sampleSinglyLinkedList.reverse();
    expect(response).toEqual(undefined);
  });
  it('Verifies functionality of method - Shift - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    let response = sampleSinglyLinkedList.shift();
    expect(response).toEqual(undefined);

    // Successful response
    sampleSinglyLinkedList.push(200);
    sampleSinglyLinkedList.push(100);
    sampleSinglyLinkedList.push(300);

    response = sampleSinglyLinkedList.shift();
    expect(response.val).toEqual(200);
    expect(sampleSinglyLinkedList.head.val).toEqual(100);
  });
  it('Verifies functionality of method - Unshift - for SinglyLinkedLists', () => {
    const sampleSinglyLinkedList = new SinglyLinkedList();

    sampleSinglyLinkedList.unshift(200);
    expect(sampleSinglyLinkedList.head.val).toEqual(200);
    expect(sampleSinglyLinkedList.tail.val).toEqual(200);

    sampleSinglyLinkedList.unshift(987);
    expect(sampleSinglyLinkedList.head.val).toEqual(987);
  });
});
