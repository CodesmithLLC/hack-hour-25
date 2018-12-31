// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
      arr[j + 1] = key;
    }
  }
}

let arr = [1, 3, 2];
insertionSort(arr);
console.log('arr: ', arr);


module.exports = insertionSort;
