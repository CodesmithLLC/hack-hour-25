// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // checker to see if it needs to bubble sort
  let change;
  // outer loop for the amount of times needed to go through the array
  for (let i = 0; i < array.length - 1; i += 1) {
    change = false;
    // inside loop will go through to the second to last index and do comparative operators for the elements next to each other in the array
    for (let j = 0; j < array.length - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        // once change is found, swapping begins
        change = true;
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    // if no change has happened through one iteration of an array, just return the array since it was checked that it is sorted
    if (!change) {
      return array;
    }
  }
  return array;
}

module.exports = bubbleSort;
