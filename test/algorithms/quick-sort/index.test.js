import { quickSort, pivotHelper } from '../../../src/algorithms/quick-sort';

describe('src/algorithms/quick-sort/index.js', () => {
  it('Verifies error handling of pivotHelper function', () => {
    // No array passed as parameter
    let response = pivotHelper({
      arr: '',
      endIndex: 1,
      startIndex: 2,
    });
    expect(response).toEqual(null);
    // Invalid end index in pivotHelper
    response = pivotHelper({
      arr: [1],
      endIndex: null,
      startIndex: 2,
    });
    expect(response).toEqual(null);
    // Invalid start index in pivotHelper
    response = pivotHelper({
      arr: [1],
      endIndex: 1,
      startIndex: null,
    });
    expect(response).toEqual(null);
  });
  it('Verifies successful pivoting of array values calling pivotHelper()', () => {
    const arrayVals = [ 12, 20, 8, 3, 190 ];
    const response = pivotHelper({
      arr: arrayVals,
    });
    // Expected 2 values are less than 12
    expect(response).toEqual(2);
  });
  it('Verifies success sorting of an array using quickSort()', () => {
    const arrayVals = [ 12, 20, 8, 3, 190, 18, 90, 15 ];
    const response = quickSort({
      arr: arrayVals,
    });
    expect(response).toEqual([ 3, 8, 12, 15, 18, 20, 90, 190 ]);
  });
});
