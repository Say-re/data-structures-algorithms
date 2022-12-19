// @flow
const getDigit = (num: Number, index: Number): Number => {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
};

const numDigitCount = (num: Number): Number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const highestDigitCount = (numbers: Array<Number>): Number => {
  let highestCount = 1;
  numbers.forEach((numb, indx) => {
    highestCount = Math.max(highestCount, numDigitCount(numb));
  });
  return highestCount;
};

const radixSort = (numbers: Array<Number>): Array<Number> => {
  let newNumbers = numbers;
  for(let i = 0; i < highestDigitCount(newNumbers); i++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < newNumbers.length; j++) {
      const digit = getDigit(newNumbers[j], i);
      digitBuckets[digit].push(newNumbers[j]);
    }
    newNumbers = [].concat(...digitBuckets);
  }
  return newNumbers;
};
