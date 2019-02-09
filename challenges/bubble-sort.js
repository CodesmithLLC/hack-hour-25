// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let swapped;
  let n = array.length;

  // iterate until not swapped
  do {
    swapped = false;
    // iterate thru array
    for (let i = 0; i < n; i += 1) {
      // compare current against next
      if (array[i] > array[i + 1]) {
        // if next less swap
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        // set swapped boolean
        swapped = true;
      }
    }
    n -= 1;
  } while (swapped);
  return array;
}

module.exports = bubbleSort;
