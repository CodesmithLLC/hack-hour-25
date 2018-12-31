// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if (array.length === 0) return array;
  const arrCopy = [...array];

  for (let i = 0; i < array.length; i += 1) {
    for (let x = array.length; x >= 0; x -= 1) {
      if (arrCopy[x] < arrCopy[x - 1]) {
        [arrCopy[x], arrCopy[x - 1]] = [arrCopy[x - 1], arrCopy[x]];
      }
    }
  }
  return arrCopy;
}

module.exports = insertionSort;