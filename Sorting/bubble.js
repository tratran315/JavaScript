const numbers = [9, 4, 13, 2, 20, -1, 0];

const calcMin = function (arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

const deleteElementFromArray = function (element, arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== element) {
      result.push(arr[i]);
    }
  }
  return result;
};

const sort = function (arr) {
  const sortedArray = [];
  let copiedArr = [...arr];
  while (copiedArr.length > 0) {
    const min = calcMin(copiedArr);
    copiedArr = deleteElementFromArray(min, copiedArr);
    sortedArray.push(min);
  }
  return sortedArray;
};
console.log(sort(numbers));

// Bubble sort
const bubbleSort = function (arr) {
  const copiedArr = [...arr];
  for (let i = 0; i < copiedArr.length - 1; i++) {
    for (let j = i + 1; j < copiedArr.length; j++) {
      if (copiedArr[j] < copiedArr[i]) {
        const temp = copiedArr[i];
        copiedArr[i] = copiedArr[j];
        copiedArr[j] = temp;
      }
    }
  }
  return copiedArr;
};
console.log(bubbleSort(numbers));
