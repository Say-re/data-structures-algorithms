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
