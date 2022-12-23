import { Graph } from '../../../src/data-structures/graph';

describe('src/data-structures/graph/index.js', () => {
  it('Verifies default attributes of Graph instance', () => {
    const sampleGraph = new Graph();
    expect(sampleGraph.adjacencyList)
      .toEqual({});
  });
  it('Verifies functionality of addVertex method', () => {
    const sampleGraph = new Graph();
    sampleGraph.addVertex('Botany');
    sampleGraph.addVertex('Biology');
    sampleGraph.addVertex('NaturalSciences');
    expect(sampleGraph.adjacencyList)
      .toEqual({
        Biology: [],
        Botany: [],
        NaturalSciences: [],
      });
  });
  it('Verifies functionality of addEdge method', () => {
    const sampleGraph = new Graph();
    sampleGraph.addVertex('Botany');
    sampleGraph.addVertex('Biology');
    sampleGraph.addVertex('NaturalSciences');
    sampleGraph.addEdge('Biology', 'NaturalSciences');
    sampleGraph.addEdge('Botany', 'NaturalSciences');

    expect(sampleGraph.adjacencyList)
      .toEqual({
        Biology: ['NaturalSciences'],
        Botany: ['NaturalSciences'],
        NaturalSciences: [ 'Biology', 'Botany' ],
      });
  });
  it('Verifies functionality of removeEdge method', () => {
    const sampleGraph = new Graph();
    sampleGraph.addVertex('Botany');
    sampleGraph.addVertex('Biology');
    sampleGraph.addVertex('NaturalSciences');
    sampleGraph.addEdge('Biology', 'NaturalSciences');
    sampleGraph.addEdge('Botany', 'NaturalSciences');

    expect(sampleGraph.adjacencyList)
      .toEqual({
        Biology: ['NaturalSciences'],
        Botany: ['NaturalSciences'],
        NaturalSciences: [ 'Biology', 'Botany' ],
      });

    sampleGraph.removeEdge('Botany', 'NaturalSciences');
    expect(sampleGraph.adjacencyList)
      .toEqual({
        Biology: ['NaturalSciences'],
        Botany: [],
        NaturalSciences: ['Biology'],
      });
  });
  it('Verifies functionality of removeVertex method', () => {
    const sampleGraph = new Graph();
    sampleGraph.addVertex('Botany');
    sampleGraph.addVertex('Biology');
    sampleGraph.addVertex('NaturalSciences');
    sampleGraph.addEdge('Biology', 'NaturalSciences');
    sampleGraph.addEdge('Botany', 'NaturalSciences');

    sampleGraph.removeVertex('NaturalSciences');
    expect(sampleGraph.adjacencyList)
      .toEqual({ Biology: [], Botany: [] });
  });
  it('Verifies error handling addEdge method', () => {
    const sampleGraph = new Graph();
    const response = sampleGraph.addEdge();
    expect(response).toEqual(undefined);
  });
  it('Verifies error handling removeEdge method', () => {
    const sampleGraph = new Graph();
    let response = sampleGraph.removeEdge('SampleVertex');
    expect(response).toEqual(undefined);
    response = sampleGraph.removeEdge('', 'SampleVertex');
    expect(response).toEqual(undefined);
  });
  it('Verifies error handling removeVertex method', () => {
    const sampleGraph = new Graph();
    const response = sampleGraph.removeVertex();
    expect(response).toEqual(undefined);
  });
});
