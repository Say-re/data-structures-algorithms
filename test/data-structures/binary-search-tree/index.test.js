import { Node, BinarySearchTree } from '../../../src/data-structures/binary-search-tree';

describe('src/data-structures/binary-search-tree/index.js', () => {
  it('Verifies default attributes of Node instance', () => {
    const sampleNode = new Node(12358);
    expect(sampleNode.value)
      .toEqual(12358);
    expect(sampleNode.left)
      .toEqual(null);
    expect(sampleNode.right)
      .toEqual(null);
  });
  it('Verifies default attributes of a BinarySearchTree instance', () => {
    const defaultBTS = new BinarySearchTree();
    expect(defaultBTS.root)
      .toEqual(null);
  });
  it('Verifies insertion and find functionality for BinarySearchTree instances', () => {
    const sampleBTS = new BinarySearchTree();
    sampleBTS.insert(38947);
    sampleBTS.insert(34984);
    sampleBTS.insert(4);
    sampleBTS.insert(12);
    sampleBTS.insert(24);
    expect(sampleBTS.root.value)
      .toEqual(38947);
    expect(sampleBTS.root.left.value)
      .toEqual(34984);

    let response = sampleBTS.find(12);
    expect(response.value).toEqual(12);

    response = sampleBTS.find(1222);
    expect(response).toEqual(false);
  });
  it('Verifies breadthFirstSearch functionality for BinarySearchTree instances', () => {
    const sampleBTS = new BinarySearchTree();
    sampleBTS.insert(38947);
    sampleBTS.insert(34984);
    sampleBTS.insert(4);
    sampleBTS.insert(12);
    sampleBTS.insert(24);

    let response = sampleBTS.breadthFirstSeach();
    expect(response).toEqual([ 38947, 34984, 4, 12, 24 ]);

    const nullBTS = new BinarySearchTree();
    response = nullBTS.breadthFirstSeach();
    expect(response).toEqual([]);
  });
  it('Verifies null response for BinarySearchTree methods', () => {
    // Searching on a tree with no nodes
    const sampleBTS = new BinarySearchTree();
    let response = sampleBTS.find(32);
    expect(response)
      .toEqual(false);

    // Searching on a tree with no search value supplied
    sampleBTS.insert(123);
    response = sampleBTS.find();
    expect(response)
      .toEqual(false);
  });
});
