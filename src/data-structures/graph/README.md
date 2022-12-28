# ***Graphs***

## ***Description***
> Graphs are a diverse collection of non-linear data structures composed of a finite number of vertices and edges which connect them. 2 of the most common graphs utilized are directed and undirected graphs. Directed graphs, as the name hints, contain edges which are directional (i.e. Vertex A may connect to Vertex B, but Vertex B cannot connect to Vertex A - Think of a one way road). By comparison, undirected graphs lack the directional property and thus if two vertices are connected, their relationship is like a 2-way road (Vertex A connects to Vertex B and Vertex B connects to Vertex A).

## ***Important Terminology***
  *Node*: Any given element within the stack; Synonymous with element.    
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
