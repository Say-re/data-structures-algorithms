// @flow
import { PriorityQueue } from '../priority-queue';

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

  DijkstrasAlgorithm (startVertex: string, endVertex: string): Array<string> {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    const finalPath = [];
    let smallest;

    // Initialize state for tracking distances between vertices and the resulting path taken to get from the start to the end vertex
    Object.keys(this.adjacencyList).forEach((vertex) => {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    });

    while (nodes.values.length) {
      smallest = nodes.dequeue(); // Smallest value in priority queue
      smallest = smallest ? smallest.value : null;
      if (smallest && smallest === endVertex) {
        while (previous[smallest]) {
          finalPath.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if ((smallest || (smallest && distances[smallest])) && typeof smallest === 'string') {
        // eslint-disable-next-line no-loop-func
        this.adjacencyList[smallest].forEach((nextNode) => {
          // $FlowFixMe - Flow not seeing value check from previous if statement
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        });
      }
    }
    return (smallest && typeof smallest === 'string') ? finalPath.concat(smallest).reverse() : [];
  }
}

export default WeightedGraph;
