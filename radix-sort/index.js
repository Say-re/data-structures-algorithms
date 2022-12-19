/* Helper functions
  getDigit(num, index)
  
*/

const getDigit = (num, index): Number => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const numDigitCount = (num): Number => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const highestDigitCount = (numbers: Array<Number>): Number => {
  const highestCount = 1;
  numbers.forEach((numb, indx) => {
    highestCount = Math.max(highestCount, numDigitCount(numb));
  });
  return highestCount;
}
