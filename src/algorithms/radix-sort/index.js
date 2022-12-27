// @flow

export const numDigitCount = (num: number): number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

export const getDigit = (num: number, index: number): ?number => {
  if ((!num && num !== 0)) return null;
  return (
    Math.floor(Math.abs(num) / 10 ** index) % 10
  );
};

export const highestDigitCount = (numbers: Array<number>): number => {
  let highestCount = 1;
  numbers.forEach((numb) => {
    highestCount = Math.max(highestCount, numDigitCount(numb));
  });
  return highestCount;
};

export const radixSort = (numbers: Array<number>): Array<number> => {
  let newNumbers = numbers;
  for (let i = 0; i <= highestDigitCount(newNumbers); i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < newNumbers.length; j++) {
      const digit = getDigit(newNumbers[j], i);
      if (digit || digit === 0) digitBuckets[digit].push(newNumbers[j]);
    }
    newNumbers = [].concat(...digitBuckets);
  }
  return newNumbers;
};

export default radixSort;
