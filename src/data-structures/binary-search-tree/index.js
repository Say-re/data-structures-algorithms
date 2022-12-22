// @flow
interface NodeClass {
  value: number,
  left: null | NodeClass,
  right: null | NodeClass,
}

interface BSTClass {
  root: null | NodeClass,
}

export class Node {
  value: number;
  left: null | NodeClass;
  right: null | NodeClass;

  constructor (value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: NodeClass | null;
  constructor () {
    this.root = null;
  }

  breadthFirstSeach (): Array<number> {
    if (!this.root) return [];
    const queue = [];
    const treeValues = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const tempNode = queue.shift();
      treeValues.push(tempNode.value);
      if (tempNode.left) queue.push(tempNode.left);
      if (tempNode.right) queue.push(tempNode.right);
    }
    return treeValues;
  }

  find (val: number): boolean | NodeClass {
    if (this.root === null) return false;
    const traverseTree = (value: number, comparisonNode: NodeClass | null): boolean | NodeClass => {
      if (!value || !comparisonNode) return false;
      if (value === comparisonNode.value) return comparisonNode;
      if ((value < comparisonNode.value && !comparisonNode.left) || (value > comparisonNode.value && !comparisonNode.right)) {
        return false;
      }
      if (value < comparisonNode.value && comparisonNode.left) {
        return traverseTree(value, comparisonNode.left);
      }
      return traverseTree(value, comparisonNode.right ? comparisonNode.right : null);
    };
    return traverseTree(val, this.root);
  }

  insert (value: number): BSTClass | null {
    const newNode: NodeClass = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      const traverseTree = (node: NodeClass, comparisonNode: NodeClass): null => {
        if (node.value < comparisonNode.value && !comparisonNode.left) {
          comparisonNode.left = node;
          return null;
        }
        if (node.value > comparisonNode.value && !comparisonNode.right) {
          comparisonNode.right = node;
          return null;
        }
        if (node.value < comparisonNode.value && comparisonNode.left) {
          traverseTree(node, comparisonNode.left);
        }
        if (node.value > comparisonNode.value && comparisonNode.right) {
          traverseTree(node, comparisonNode.right);
        }
        return null;
      };
      traverseTree(newNode, this.root);
    }
    return this;
  }
}

export default BinarySearchTree;
