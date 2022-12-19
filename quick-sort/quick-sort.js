type PivotHelperProps = {
  arr: Array<number>,
  endIndex: Number,
  startIndex: Number,
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

export const quickSort = () => {

};

export default quickSort;
