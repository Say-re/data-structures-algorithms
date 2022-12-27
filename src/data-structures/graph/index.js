// @flow
type AdjacencyListProps = {
  [key: string]: Array<string>,
}

export class Graph {
  adjacencyList: AdjacencyListProps;
  constructor () {
    this.adjacencyList = {};
  }

  addEdge (vertex1: string, vertex2: string): ?AdjacencyListProps {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this.adjacencyList;
  }

  addVertex (value: string) {
    this.adjacencyList[value] = [];
  }

  _BreadthFirstIterative (start: string): ?Array<string> {
    if (!this.adjacencyList[start]) return null;
    const queue = [];
    const values = [];
    const visited = {};
    queue.push(start);
    while (queue.length) {
      const vertex = queue.shift();
      if (!visited[vertex]) {
        values.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach((neighbor) => {
          queue.push(neighbor);
        });
      }
    }
    return values;
  }

  _DepthFirstIterative (start: string): ?Array<string> {
    if (!this.adjacencyList[start]) return null;
    const stack = [];
    const values = [];
    const visited = {};

    stack.push(start);
    while (stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        values.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }
    return values;
  }

  _DepthFirstRecursive (vertex: string): ?Array<string> {
    if (!this.adjacencyList[vertex]) return null;
    const values = [];
    const visited = {};
    const traverseGraph = (vertx: string): ?null => {
      if (!vertx) return null;
      values.push(vertx);
      visited[vertx] = true;
      for (let i = 0; i < this.adjacencyList[vertx].length; i++) {
        if (!visited[this.adjacencyList[vertx][i]]) {
          traverseGraph(this.adjacencyList[vertx][i]);
        }
      }
      return null;
    };
    traverseGraph(vertex);
    return values;
  }

  removeEdge (vertex1: string, vertex2: string): ?AdjacencyListProps {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    return this.adjacencyList;
  }

  removeVertex (vertex: string): ?AdjacencyListProps {
    if (!this.adjacencyList[vertex]) return undefined;
    this.adjacencyList[vertex].forEach((v) => this.removeEdge(vertex, v));
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }
}

export default Graph;
