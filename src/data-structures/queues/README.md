# ***Queues***

## ***Description***
> A queue is an abstract data structure/collection that follows the paradigm of FIFO (first in first out). To accomplish this each instance of a stack is assigned 3 properties (first, last, and size), and has two methods available, enqueue - to add new elements to the stack, and dequeue to remove elements from the stack. Common utilizations for stacks include management of document uploading/downloading, , maintaining a playlist, printing documents, the list goes on.

## ***Important Terminology***
  *First*: The first node (element) added to the stack.  
  *Size*: The total number of nodes (elements) within the current linked list instance.  
  *Node*: Any given element within the stack; Synonymous with element.  
  *Pointer*: Attribute associated with an individual node which points to another node or is null.  
  *Last*: The last node (element) added to the stack.  
  *Value*: Any given node's (element's) assigned value.  

## ***Section 1 - Methods***

### ***1.1 Dequeue***

#### Parameters
  - none

#### Return values
  - The first value of the stack

#### ***General Description***
> When the dequeue method is applied to a queue, it applies the FIFO methodology by removing the first node added to the stack and updates the next oldest element as the new first element. If no value is available, the method returns null;

### ***1.2 Enqueue***

#### Parameters
  - value: new value to be added to the queue

#### Return values
  - None

#### ***General Decription***
> Calling the enqueue method on a queue instance adds the passed value to the end of the queue (this will now be the last value returned as a result of successive dequeue calls). This is due to the FIFO methodology and needing the first item added to be the first one removed.

## ***Section 2 - Big O notation***

### ***2.1 - Access, insertion, removal, and searching***
> *Access* - O(N)
> *Insertion* - O(1)
> *Removal* - O(1)
> *Searching* - O(N)
