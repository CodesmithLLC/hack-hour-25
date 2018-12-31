// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++){
    const temp = array[i];
    for (let j = i-1; j >= 0; j--){
      if (array[j] > temp) {
        array[j+1] = array[j]
        array[j] = temp
      } else break
    }
  } 
  return array
}

module.exports = insertionSort;