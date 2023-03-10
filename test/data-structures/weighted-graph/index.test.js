import { WeightedGraph } from '../../../src/data-structures/weighted-graph';

describe('src/data-structures/weighted-graph/index.js', () => {
  it('Verifies default attributes of WeightedGraph instance', () => {
    const sampleWeightedGraph = new WeightedGraph();
    expect(sampleWeightedGraph.adjacencyList)
      .toEqual({});
  });
  it('Verifies successful response of addVertex method - New vertext added to adjacencyList', () => {
    const sampleWeightedGraph = new WeightedGraph();
    sampleWeightedGraph.addVertex('climateChange');
    expect(sampleWeightedGraph.adjacencyList)
      .toEqual({
        climateChange: [],
      });
  });
  it('Verifies duplicate response of addVertex method - vertex already exists in the weighted graph', () => {
    const sampleWeightedGraph = new WeightedGraph();
    const response1 = sampleWeightedGraph.addVertex('climateChange');
    const response2 = sampleWeightedGraph.addVertex('climateChange');
    expect(response1)
      .toEqual(response2);
  });
  it('Verifies successful response of addEdge method - establishes weighted relationship between vertices of the weightedGraph', () => {
    const sampleWeightedGraph = new WeightedGraph();
    sampleWeightedGraph.addVertex('climateChange');
    sampleWeightedGraph.addVertex('naturalSciences');
    sampleWeightedGraph.addEdge('climateChange', 'naturalSciences', 100);
    expect(sampleWeightedGraph.adjacencyList).toEqual({
      climateChange: [{ node: 'naturalSciences', weight: 100 }],
      naturalSciences: [{ node: 'climateChange', weight: 100 }],
    });
  });
  it('Verifies null response of addEdge method - 1 or more of the vertices does not exist in the weightGraph', () => {
    const sampleWeightedGraph = new WeightedGraph();
    const response = sampleWeightedGraph.addEdge('climateChange', 'naturalSciences', 100);
    expect(response)
      .toEqual(undefined);
  });
  it("Verifies successful response from Dijkstra's algorithm", () => {
    const sampleWeightedGraph = new WeightedGraph();
    sampleWeightedGraph.addVertex('A');
    sampleWeightedGraph.addVertex('B');
    sampleWeightedGraph.addVertex('C');
    sampleWeightedGraph.addVertex('D');
    sampleWeightedGraph.addVertex('E');
    sampleWeightedGraph.addVertex('F');

    sampleWeightedGraph.addEdge('A', 'B', 4);
    sampleWeightedGraph.addEdge('A', 'C', 2);
    sampleWeightedGraph.addEdge('B', 'E', 3);
    sampleWeightedGraph.addEdge('C', 'D', 2);
    sampleWeightedGraph.addEdge('C', 'F', 4);
    sampleWeightedGraph.addEdge('D', 'E', 3);
    sampleWeightedGraph.addEdge('D', 'F', 1);
    sampleWeightedGraph.addEdge('E', 'F', 1);

    const shortestPath = sampleWeightedGraph.DijkstrasAlgorithm('A', 'E');
    expect(shortestPath).toEqual([ 'A', 'C', 'D', 'F', 'E' ]);
  });
});
