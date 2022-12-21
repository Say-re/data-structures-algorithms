# ***Doubly Linked Lists***

## ***Description***
> Similar to a singly linked list, the doubly linked list is a collection of data points (nodes) composed of three attributes, a head, a tail, and the length of the linked list. The data is connected one node to the other from the head to the tail, however each node contains a next and prev attribute which point to the next and previous node in the list, respectively. This allows for traversal of the linked list from either the head or tail, but results in an increase in memory requirements for individual instances when compared with singly linked lists.

## ***Important Terminology***
  *Head*: The first node (element) within the linked list.  
  *Length*: The total number of nodes (elements) within the current linked list instance.
  *Next*: Pointer that is directed at the next node in the linked list.  
  *Node*: Any given element within the list; Synonymous with element.  
  *Pointer*: Attribute associated with an individual node which points to another node or is null.  
  *Previous*: Pointer that is directed at the previous node in the linked list.
  *Tail*: The last node (element) within the linked list.  
  *Value*: Any given node's (element's) assigned value.  

## ***Section 1 - Methods***

### ***1.1 Get***

#### Parameters
  - index - index of value to be retreived (first value = index 0)

#### Return values
  - Node at specified index

#### ***General functionality***
> *When the get method is called, the node at the index provided is returned. If the index provided is less than 0 or greater than the length of the doubly linked list the method will return null.*

### ***1.2 Insert***

#### Parameters
  - index - index to insert new node
  - val - value for new Node

#### Return values
  - boolean

#### ***General functionality***
> *When the insert method is called, a new node is created from the value provided, the node prior to the index provided is retreived with its current 'next' property being assigned to the new node's 'next' property and the new node is assigned to the retreived node. If the index provided is less than 0 or greater than the length of the doubly linked list the method will return false.*

### ***1.3 Pop***

#### Parameters
  - None

#### Return values
  - Previous tail value

#### ***General functionality***
> *When the pop method is called, the last node in the doubly linked list is removed and returned as the result of the function. The second to last item in the list is then made to be the new tail by updating it's next attribute to null and setting the tail property of the doubly linked list to the node. If no head is present (no values present), method returns undefined.*

### ***1.4 Push***

#### Parameters
  - val: value to be added to the end of the linked list

#### Return values
  - doubly linked lists

#### ***General functionality***
> *When the push method is called and supplied with a single value it is appended to the end of the doubly linked list. If no head is present (no values present), set value to both the head and tail of the list. Otherwise, make passed value the 'next' attribute of the current tail, make the current tail the 'prev' value of the passed value, reassign the tail property of the doubly linked list to that value, and increment the length property of the doubly linked list by 1.*

### ***1.5 Remove***

#### Parameters
  - index - index of node to be removed

#### Return values
  - removedNode - node removed from the list at the index provided

#### ***General functionality***
> *When the remove method is called, retrieve the node at the provided index, remove it from the list, and return the removed node. If index is less than 0 or greater than or equal to the length of the doubly linked list, do nothing and return undefined.*

### ***1.6 Reverse***

#### Parameters
  - None

#### Return values
  - this - the reversed doubly linked list

#### ***General functionality***
> *When the reverse method is called, it takes the entire doubly linked list and reverses it in place (without making a copy). If the referenced instance does not have have values, the method returns undefined.*

### ***1.7 Set***

#### Parameters
  - index - index of node to be updated
  - val - value to update node with

#### Return values
  - boolean

#### ***General functionality***
> *When the set method is called, utilize the get method to get the node at the specified index, update the node's value to be the 'val' present in the parameters, and return true. If no node is found at the specified index, do nothing and return false.*

### ***1.8 Shift***

#### Parameters
  - None

#### Return values
  - Previous head

#### ***General functionality***
> *When the shift method is called, remove the first node (the head) from the doubly linked list, reassign the previous head's next value as the new head, and return the previous head as the output for the method. If no head is present (no nodes present), do nothing and return undefined.*

### ***1.9 Unshift***

#### Parameters
  - val - new element to be added to linked list

#### Return values
  - Doubly Linked List 

#### ***General functionality***
> *When the unshift method is called, create a new Node instance from the value supplied, reassign the new node as the head of the doubly linked list, make the previous head's node the 'next' value for the newly assigned head, increment the length of the list by 1, and return the doubly linked list. If no head is present (no nodes present), set the passed value to be both the head and tail of the doubly linked list and return the doubly linked list.*


## ***Section 2 - Big O notation***

### ***2.1 - Access, insertion, removal, and searching***
> *Access* - O(N)
> *Insertion* - O(1)
> *Removal* - O(1)
> *Searching* - O(N)
