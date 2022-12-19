# ***Radix Sort***

## ***1.1 Description of getDigit() helper function***

### Parameters
  - num: number to retreive digit from
  - index: place of digit within number to retreive 

### Return value
  - digit: single digit of number at specifified index. If no value found returns 0

### ***General functionality***
> *From a given number and index, the function will return the value of the digit at that location in the number. The function currently assumes base 10 numbers, but could be expanded to function with other bases. For example, if you passed the number 92837 and index 3 this function will return 8.*

## ***1.2 Description of numDigitCount() helper function***

### Parameters
  - num: number to retreive digit count from

### Return value
  - digitCount: total number of digits within a number

### ***General functionality***
> *From a given number, the function will return the total number of digits within that number. The function currently assumes base 10 numbers, but could be expanded to function with other bases. For example, if you passed the number 92837 this function will return 5.*

## ***1.3 Description of highestDigitCount() helper function***

### Parameters
  - numbers: array of numbers

### Return value
  - highestDigitCount: highest number of digits found within a single element of the numbers array

### ***General functionality***
> *From a given array of numbers, the function will return the highest digit count of any number within the array. The function currently assumes base 10 numbers, but could be expanded to function with other bases. For example, if you passed the numbers `highestDigitCount([92837, 389493, 9, 3479685])` this function will return 7 as this is the total number of digits found in 3479685, the largest number.*

## ***1.4 Description of radixSort() function***

### Parameters
  - numbers: array of numbers

### Return value
  - newNumbers: array of numbers sorted

### ***General functionality***
> *From a given array of numbers, the function will sort the array from smallest to largest. The function currently assumes base 10 numbers, but could be expanded to function with other bases. For example, if you passed the numbers `radixCount([92837, 389493, 9, 3479685, 23, 299, 10, 58])` this function will return `[9, 10, 23, 58, 299, 92837, 389493, 3479685]`, a fully sorted array.*
