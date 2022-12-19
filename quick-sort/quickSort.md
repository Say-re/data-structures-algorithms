# ***Quick Sort***

## ***1.1 Description of pivotHelper() Function***
### Parameters 
  - arr: Array of length > 1  
  - startIndex: default to 0  
  - endIndex: arr.length - 1  
### Return value 
  - index: Final index of pivot element  

### ***General functionality*** ###   
> *From a given array an element should be designated as the pivot. It should then rearrage elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot. This should be accomplished in place and not create a new array. Return value for the function is the index of the pivot.*  

## ***1.2 Description of quickSort() Function***
### Parameters
  - arr: Array of length > 1 to be sorted  
  - left: first element to sort within array  
  - right: last element to sort within array 

### Return value
  - arr: final sorted array

### ***General functionality*** ###  
> *Given unsorted array (arr), sort the left variable within the array. Upon returning the new index of the left element, recursively sort all elements to the left of the provided index and to the right. This should be accomplished in place and not create a new array. Return the sorted array as the final value from the function.*
