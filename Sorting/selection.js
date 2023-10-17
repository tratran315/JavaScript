const numbers1 = [9, 4, 13, 2, 20, -1, 0];

const selectionSort = function (arr) {
  const copiedArr = [...arr];
  for (let i = 0; i < copiedArr.length; i++) {
    let min = copiedArr[i];
    let minPosition = i;
    for (let j = i + 1; j < copiedArr.length; j++) {
      if (min > copiedArr[j]) {
        min = copiedArr[j];
        minPosition = j;
      }
    }
    const temp = copiedArr[i];
    copiedArr[i] = copiedArr[minPosition];
    copiedArr[minPosition] = temp;
  }
  return copiedArr;
};
console.log(selectionSort(numbers1));
