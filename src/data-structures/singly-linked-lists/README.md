# ***Singly Linked Lists***

## ***Description***
> A linked list has three major attributes, a head, a tail, and a pointer.

## ***Important Terminology***
  |   *Head*: The first node (element) within the linked list.  
  |   *Length*: The total number of nodes (elements) within the current linked list instance.  
  |   *Node*: Any given element within the list; Synonymous with element.  
  |   *Pointer*: Attribute associated with an individual node which points to another node or is null.  
  |   *Tail*: The last node (element) within the linked list.  
  |   *Value*: Any given node's (element's) assigned value.  

## ***Section 1 - Methods***

### ***1.1 Pop***

#### Parameters
  - None

#### Return values
  - Previous tail value

#### ***General functionality***
> *When the pop method is called, the last node in the singly linked list is removed and returned as the result of the function. The second to last item in the list is then made to be the new tail by updating it's next attribute to null and setting the tail property of the singly linked list to the node. If no head is present (no values present), method returns undefined.*

### ***1.2 Push***

#### Parameters
  - val: value to be added to the end of the linked list

#### Return values
  - Void

#### ***General functionality***
> *When the push method is called and supplied with a single value it is appended to the end of the singly linked list. If no head is present (no values present), set value to both the head and tail of the list. Otherwise, make passed value the 'next' attribute of the current tail, reassign the tail property of the singly linked list to that value, and increment the length property of the singly linked list by 1.*

### ***1.2 Shift***

#### Parameters
  - None

#### Return values
  - Previous head

#### ***General functionality***
> *When the shift method is called remove the first node (the head) from the singly linked list, reassign the previous head's next value as the new head, and return the previous head as the output for the method. If no head is present (no nodes present), do nothing and return undefined.*
