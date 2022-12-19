type PivotHelperProps = {
  arr: Array<number>,
  endIndex: Number,
  startIndex: Number,
}

type QuickSortProps = {
  arr: Array<Number>,
  left: Number,
  right: Number,
}

export const pivotHelper = ({
  arr,
  endIndex = arr.length + 1,
  startIndex = 0,
}: PivotHelperProps): Number | null => {
  if (!arr || !endIndex || !startIndex || arr.length < 2) return null;
  const swap = (array, i, j) => {
    const temp  = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  const pivotVal = arr[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (pivotVal > arr[i]) {
      pivotIndex ++;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, startIndex, pivotIndex);
  return pivotIndex;
};

export const quickSort = ({
  arr,
  left = 0,
  right = arr.length - 1,
}) => {
  if (left < right) {
    let pivotIndex = pivot({ arr, startIndex: left, endIndex: right });
    // Sort Left side of remaining array
    quickSort({ arr, left, right: pivotIndex - 1 });
    // Sort right side of remaining array
    quickSort({ arr, left: pivotIndex + 1, right });
  }
  return arr;
};

export default quickSort;
