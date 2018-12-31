// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (let i = 1; i < array.length; i++){
        for (let j = i; j >= 0; j--){
          let prev = array[j-1];
          let current = array[j];
          if (array[j] < array[j-1]){
            array[j] = prev;
            array[j-1] = current;
          } 
        }
      }
    return array;
}

module.exports = insertionSort;