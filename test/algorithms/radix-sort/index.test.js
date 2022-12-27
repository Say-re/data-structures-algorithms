import {
  getDigit,
  highestDigitCount,
  numDigitCount,
  radixSort,
} from '../../../src/algorithms/radix-sort';

describe('src/algorithms/radix-sort/index.js', () => {
  it('Verifies error responses from getDigit()', () => {
    // No number parameter
    const response = getDigit(null, 1);
    expect(response)
      .toEqual(null);
  });
  it('Verifies successful response from getDigit()', () => {
    const response = getDigit(12390, 2);
    expect(response)
      .toEqual(3);
  });
  it('Verifies successful determination of the highest digit count from an array of numbers', () => {
    const response = highestDigitCount([ 123, 2, 298472, 983274, 39874298479 ]);
    expect(response)
      .toEqual(11);
  });
  it('Verifies successful determination of a numbers digit count', () => {
    const response = numDigitCount(2492874);
    expect(response)
      .toEqual(7);
  });
  it('Verifies success sorting via radixSort function', () => {
    const response = radixSort([ 123, 20, 19, 2041, 292, 80, 66, 202, 1 ]);
    expect(response)
      .toEqual([ 1, 19, 20, 66, 80, 123, 202, 292, 2041 ]);
  });
});
