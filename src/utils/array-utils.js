
export const getMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (const item of arr) {
    min = Math.min(min, item);
    max = Math.max(max, item);
  }
  return [min, max];
};

export const getIndexOfMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let minIndex = 0;
  let maxIndex = 0;

  for (const [index, item] of arr.entries()) {
    if (item < min) {
      minIndex = index;
      min = item;
    }

    if (item > max) {
      maxIndex = index;
      max = item;
    }

  }
  return [minIndex, maxIndex];
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


export const generateIntermediatePoints = (min, max, totalPoints) => {
  const arr = [min];
  const dx = (max-min)/(totalPoints - 1)
  for (let i = 1; i <= totalPoints-1; i++) {
    arr.push(Math.floor(min + dx * i + 0.1));
  }
  return arr;
}
