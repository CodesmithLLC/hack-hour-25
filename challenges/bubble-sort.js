// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped = 0;
  for (let i = 0; i < array.length; i += 1) {
    const temp = array[i + 1];
    if (array[i] > temp) {
      array[i + 1] = array[i];
      array[i] = temp;
      swapped += 1;
    }
  }
  if (swapped > 0) return bubbleSort(array);
  return array;
}

console.log(bubbleSort([3, 1, 2, 4, 5, 6, 8, 7, 10, 9]))

module.exports = bubbleSort;
