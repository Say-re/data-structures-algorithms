# ***Stacks***

## ***Description***
> A stack is an abstract data structure/collection that follows the paradigm of LIFO (last in first out). To accomplish this each instance of a stack is assigned 3 properties (first, last, and size), and has two methods available, push - to add new elements to the stack, and pop to remove elements from the stack. Common utilizations for stacks include management of function invocations, undo/redo functionality, browser history, and much more!

## ***Important Terminology***
  *First*: The most recent node (element) added to the stack.  
  *Size*: The total number of nodes (elements) within the current linked list instance.  
  *Node*: Any given element within the stack; Synonymous with element.  
  *Pointer*: Attribute associated with an individual node which points to another node or is null.  
  *Last*: The first node (element) added to the stack.  
  *Value*: Any given node's (element's) assigned value.  

## ***Section 1 - Methods***

### ***1.1 Pop***

#### Parameters
  - none

#### Return values
  - The 'first' property of the stack `stack.first`

#### ***General Description***
> When the pop method is applied to a stack, it applies the LIFO methodology by removing the last node added to the stack and updates the last node reference for that instance. If no value is available, the method returns null;

### ***1.2 Push***

#### Parameters
  - value: new value to be added to the stack

#### Return values
  - None

#### ***General Decription***
> Calling the push method on a stack instance adds the passed value as the 'first' node in the stack. This is due to the LIFO methodology and needing the last item added to be the first one removed.

## ***Section 2 - Big O notation***

### ***2.1 - Access, insertion, removal, and searching***
> *Access* - O(N)
> *Insertion* - O(1)
> *Removal* - O(1)
> *Searching* - O(N)
