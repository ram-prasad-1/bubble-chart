
export const getMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (const item of arr) {
    min = Math.min(min, item);
    max = Math.max(max, item);
  }
  return [min, max];
};


export const getTransformedCoordinates1D = (arr, newLength, newStart) => {
  const [min, max] = getMinMax(arr);
  const scaleFactor = newLength / (max - min);
  const newArr = [];
  for (const [index, xOld] of arr.entries()) {
    newArr[index] = Math.floor((xOld - min) * scaleFactor + newStart);
  }
  return newArr;
};
