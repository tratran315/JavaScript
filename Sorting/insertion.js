const numbers2 = [9, 4, 13, 2, 20, -1, 0];

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let temp = arr[j];
    while (j > 0) {
      if (temp < arr[j - 1]) {
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
      j--;
    }
  }
  return arr;
};

console.log(insertionSort(numbers2));
console.log(insertionSort([12, 50, 32, 14, 2, 25, 36, 27, 24, 47, 43, 30]));
