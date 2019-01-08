// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let switched = true;
  while (switched) {
    switched = false;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        switched = true;
        const holder = array[i];
        array[i] = array[i + 1];
        array[i + 1] = holder;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
