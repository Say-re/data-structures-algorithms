# ***Priority Queue***

## ***Description***
> A priority queue is an abstract data structure/collection that follows the paradigm of highest priority (lowest number in our instance) first out and functions by assigning a priority value to each entry and building the tree based on how prioritys compare to one another. To accomplish this each instance of a priority queue is assigned a single property of 'values', and has two methods available, enqueue - to add new elements to the queue, and dequeue to remove elements from the queue. Adding elements to the queue will bubble up based on the priority assigned while removing elements will rearrange the queue based on the remaining priorities in the queue.

## ***Important Terminology***
  *Node*: Any given element within the stack; Synonymous with element.
  *Priority*: The priority value assigned to a given Node element when adding to the queue.    
  *Value*: Any given node's (element's) assigned value.  
  *Values*: An array of the Node's currently stored in the queue.  

## ***Section 1 - Methods***

### ***1.1 Dequeue***

#### Parameters
  - none

#### Return values
  - The highest priority Node in the queue

#### ***General Description***
> When the dequeue method is applied to a priority queue, it removing the highest priority node present in the the stack and updates the values arrangement to place the next highest priority value as the next item to remove. If no value is available, the method returns null;

### ***1.2 Enqueue***

#### Parameters
  - value: new value to be added to the queue
  - priority: priority value to be assigned to this Node

#### Return values
  - None

#### ***General Decription***
> Calling the enqueue method on a queue instance adds the passed value to the end of the queue. This value will then bubble up through the queue based on the priority value assigned to the node and be placed in chronological order of decreasing priority levels.

## ***Section 2 - Big O notation***

### ***2.1 - Access, insertion, removal, and searching***
> *Access* - O(N)
> *Insertion* - O(1)
> *Removal* - O(1)
> *Searching* - O(N)
