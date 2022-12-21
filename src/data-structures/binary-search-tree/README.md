# ***Binary Search Tree***

## ***Description***
> A Binary Search Tree is a data collection composed of individual nodes that begin at the trees root node. Each parent node can point to at most 2 children nodes, identified through the left and right attribute of the parent node. Children assigned to the left or right attribute are nodes with a value less than the parent node or greater than the parent node, respectively.

## ***Important Terminology***
  *Root*: The base node on which the binary search tree is based. 
  *Parent*: A node which contains 1 or more children nodes.
  *Siblings*: Nodes which share the same parent node.
  *Child*: A Node directly connected to another node moving away from the root element
  *Leaf*: A Node which has no children. Indicates the end in a line of successive parent to child elements.

## ***Section 1 - Methods***

### ***1.1 Find***

#### Parameters
  - val - value of node to be retreived from the BST

#### Return values
  - node instance with specified value  or Boolean(false)

#### ***General functionality***
> *Upon calling the find method, the function will recursively traverse through the BST until the supplied value is found. If the value is not in the tree, the returned value is false.*

### ***1.1 Insert***

#### Parameters
  - value - the value of the new Node to be inserted into the BST.

#### Return values
  - Updated state of BST after new value is inserted

#### ***General functionality***
> *Upon calling the insert method, the value given will be compared to the current nodes in the tree and be inserted based on it's relationship to those values (greater than or less than).*

## ***Section 2 - Big O notation***

### ***2.1 - Access, insertion, removal, and searching***
> *Access* - O(N)
> *Insertion* - O(1)
> *Removal* - O(1)
> *Searching* - O(N)
