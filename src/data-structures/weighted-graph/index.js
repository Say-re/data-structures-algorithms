// @flow
type AdjacencyListProps = {
  [key: string]: Array<{ node: string, weight: number}>,
}

export class WeightedGraph {
  adjacencyList: AdjacencyListProps;
  constructor () {
    this.adjacencyList = {};
  }

  addVertex (vertex: string): AdjacencyListProps {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  addEdge (vertex1: string, vertex2: string, weight: number): ?AdjacencyListProps {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
    return this.adjacencyList;
  }
}

export default WeightedGraph;
