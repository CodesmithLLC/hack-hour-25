// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let curr = array[i]
    let j = i - 1;
    while (j >= 0 && array[j] > curr){
      array[j+1] = array[j];
      j -= 1;
    }
    array[j+1] = curr;
  //       if (prev > curr) {
  //       array[i] = prev;
  //       array[i-1] = curr;

  // }
  }
  return array;
}

const array = [2, 4, 1, 21, 7];
const array2 = [12, 11, 13, 5, 6]
console.log(insertionSort(array));

module.exports = insertionSort;