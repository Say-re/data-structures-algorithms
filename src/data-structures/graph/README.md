# ***Graphs***
## ***Description***
> Graphs are a diverse collection of non-linear data structures composed of a finite number of vertices and edges which connect them. 2 of the most common graphs utilized are directed and undirected graphs. Directed graphs, as the name hints, contain edges which are directional (i.e. Vertex A may connect to Vertex B, but Vertex B cannot connect to Vertex A - Think of a one way road). By comparison, undirected graphs lack the directional property and thus if two vertices are connected, their relationship is like a 2-way road (Vertex A connects to Vertex B and Vertex B connects to Vertex A).

## ***Important Terminology***
  *Node*: Any given element within the stack; Synonymous with element.    
  *Value*: Any given node's (element's) assigned value.  
  *Values*: An array of the Node's currently stored in the queue.  

## ***Section 1 - Methods***

### ***1.1 addEdge***

#### Parameters
  - vertex1 - First vertex to make a connection between
  - vertex2 - Second vertex to make a connection between

#### Return values
  - Current adjacencyList of the weightedGraph

#### ***General Description***
> Creates an edge that connects two vertices in the graph.
### ***1.2 addVertex***

#### Parameters
  - value - New vertex to add to the graph

#### Return values
  - No return value

#### ***General Description***
> Adds a new vertex to the graph
### ***1.3 _BreadthFirstIterative***

#### Parameters
  - start - Vertex of graph to begin traversal at

#### Return values
  - An array of every vertex in the graphs value

#### ***General Description***
> Iterates through all vertices in the graph through an iterative breadth first approach
### ***1.4 _DepthFirstIterative***

#### Parameters
  - start - Vertex of graph to begin traversal at

#### Return values
  - An array of every vertex in the graphs value

#### ***General Description***
>  Iterates through all the vertices in the graph through an iterative depth first approach
### ***1.5 _DepthFirstRecursive***

#### Parameters
  - start - Vertex of graph to begin traversal at

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
