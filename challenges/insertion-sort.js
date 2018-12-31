// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[i] < array[j]) {
        const temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
    }
  }
  return array;
}

const testArray = [10, 13, 4, 5, 17];
console.log(insertionSort(testArray));

module.exports = insertionSort;
