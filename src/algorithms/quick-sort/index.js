// @flow
type PivotHelperProps = {
  arr: Array<number>,
  endIndex: number,
  startIndex: number,
}

type QuickSortProps = {
  arr: Array<number>,
  left: number,
  right: number,
}

export const pivotHelper = ({
  arr,
  endIndex = (arr && arr.length) ? arr.length + 1 : 0,
  startIndex = 0,
}: PivotHelperProps): number | null => {
  if (!arr || !endIndex || (!startIndex && startIndex !== 0) || arr.length < 2) return null;
  const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const pivotVal = arr[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (pivotVal > arr[i]) {
      pivotIndex++;
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
}: QuickSortProps): Array<number> => {
  if (left < right) {
    const pivotIndex = pivotHelper({ arr, startIndex: left, endIndex: right });
    if (pivotIndex) {
      // Sort Left side of remaining array
      quickSort({ arr, left, right: pivotIndex - 1 });
      // Sort right side of remaining array
      quickSort({ arr, left: pivotIndex + 1, right });
    }
  }
  return arr;
};

export default quickSort;
