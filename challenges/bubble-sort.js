// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let x = 0; x < array.length; x += 1) {
    // iterate thru array
    for (let i = 0; i < array.length; i += 1) {
      // check if current el is greater than next el, if so swap els
      if (array[i] > array[i + 1]) {
        let tempEl = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempEl;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
