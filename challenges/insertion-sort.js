// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  let count = 0;
  let temp;
  while (count < array.length) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    count++;
    i = 0;
  }
  return array;
}

console.log(insertionSort(arr));

module.exports = insertionSort;