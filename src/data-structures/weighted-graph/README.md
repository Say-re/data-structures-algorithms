# ***Graphs***

## ***Description***
> A weighted graph is a type of the broader data structure known as graphs. It is composed of a finite number of vertices and their edges which connect two vertices together. The unique aspect of weighted graphs is that the edges connecting vertices are assigned a weight providing greater context for the relationship between each element in the graph. Common applications include finding the shortest distance between two nodes by comparing different paths based on the edges assigned weights that separate the two vertices which you are trying to find the path too.

## ***Important Terminology***
  *Node*: Any given element within the stack; Synonymous with element.    
  *Value*: Any given node's (element's) assigned value.  
  *Values*: An array of the Node's currently stored in the queue.  

## ***Section 1 - Methods***

### ***1.1 addEdge***

#### Parameters
  - vertex1 - First vertex to make a connection between
  - vertex2 - Second vertex to make a connection between
  - weight - weight assigned to the edge for the two vertices

#### Return values
  - Current adjacencyList of the weightedGraph

#### ***General Description***
> Creates an edge that is assigned a weight between two vertices in the graph.
### ***1.2 addVertex***

#### Parameters
  - value - New vertex to add to the weighted graph

#### Return values
  - No return value

#### ***General Description***
> Adds a new vertex to the graph
### ***1.3 _BreadthFirstIterative***

#### Parameters
  - start - Vertex of weighted graph to begin traversal at

#### Return values
  - An array of every vertex in the graphs value

#### ***General Description***
> Iterates through all vertices in the graph through an iterative breadth first approach
### ***1.4 _DepthFirstIterative***

#### Parameters
  - start - Vertex of weighted graph to begin traversal at

#### Return values
  - An array of every vertex in the graphs value

#### ***General Description***
>  Iterates through all the vertices in the graph through an iterative depth first approach
### ***1.5 _DepthFirstRecursive***

#### Parameters
  - start - Vertex of weighted graph to begin traversal at

#### Return values
  - An array of every vertex in the graphs value

#### ***General Description***
> Recursively traverses all the vertices in the graph through a depth first approach
### ***1.6 removeEdge***

#### Parameters
  - vertex1 - First vertex to remove a connection between
  - vertex2 - Second vertex to remove a connection between

#### Return values
  - The current adjacency list after the edge is removed from vertex1 and vertex2

#### ***General Description***
> 
### ***1.7 removeVertex***

#### Parameters
  - vertex - node to remove from the graph

#### Return values
  - The current adjacency list after the vertex is removed

#### ***General Description***
> Removes a given vertex from the graph and return the remaining adjacency list of the graph.


## ***Section 2 - Big O notation***

### ***2.1 - Access, insertion, removal, and searching***
> *Access* - 
> *Insertion* -
> *Removal* - 
> *Searching* - 
