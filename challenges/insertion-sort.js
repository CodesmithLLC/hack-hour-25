// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = i; j >= 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        const holder = array[j];
        array[j] = array[j - 1];
        array[j - 1] = holder;
      }
    }
  }
  return array;
}

module.exports = insertionSort;
