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
  it('Verifies functionality of _BreadthFirstIterative method', () => {
    const sampleGraph = new Graph();
    sampleGraph.addVertex('Botany');
    sampleGraph.addVertex('Biology');
    sampleGraph.addVertex('NaturalSciences');
    sampleGraph.addVertex('Trees');
    sampleGraph.addEdge('Biology', 'NaturalSciences');
    sampleGraph.addEdge('Botany', 'NaturalSciences');
    sampleGraph.addEdge('Botany', 'Trees');

    const response = sampleGraph._BreadthFirstIterative('Botany');
    expect(response)
      .toEqual([ 'Botany', 'NaturalSciences', 'Trees', 'Biology' ]);
  });
  it('Verifies functionality of _DepthFirstIterative method', () => {
    const sampleGraph = new Graph();
    sampleGraph.addVertex('Botany');
    sampleGraph.addVertex('Biology');
    sampleGraph.addVertex('NaturalSciences');
    sampleGraph.addEdge('Biology', 'NaturalSciences');
    sampleGraph.addEdge('Botany', 'NaturalSciences');

    const response = sampleGraph._DepthFirstIterative('Botany');
    expect(response)
      .toEqual([ 'Botany', 'NaturalSciences', 'Biology' ]);
  });
  it('Verifies functionality of _DepthFirstRecrusive method', () => {
    const sampleGraph = new Graph();
    sampleGraph.addVertex('Botany');
    sampleGraph.addVertex('Biology');
    sampleGraph.addVertex('NaturalSciences');
    sampleGraph.addEdge('Biology', 'NaturalSciences');
    sampleGraph.addEdge('Botany', 'NaturalSciences');

    const response = sampleGraph._DepthFirstRecursive('Botany');
    expect(response)
      .toEqual([ 'Botany', 'NaturalSciences', 'Biology' ]);
  });
  it('Verifies error handling addEdge method', () => {
    const sampleGraph = new Graph();
    const response = sampleGraph.addEdge();
    expect(response).toEqual(undefined);
  });
  it('Verifies error handling _BreadthFirstIterative method', () => {
    const sampleGraph = new Graph();
    const response = sampleGraph._DepthFirstIterative('Biology');
    expect(response).toEqual(null);
  });
  it('Verifies error handling _DepthFirstIterative method', () => {
    const sampleGraph = new Graph();
    const response = sampleGraph._DepthFirstIterative('Biology');
    expect(response).toEqual(null);
  });
  it('Verifies error handling _DepthFirstRecursive method', () => {
    const sampleGraph = new Graph();
    const response = sampleGraph._DepthFirstRecursive('Biology');
    expect(response).toEqual(null);
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
