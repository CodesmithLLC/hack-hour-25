/* eslint-disable no-param-reassign */
// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  // Declare a boolean to track if a swap has occured
  let swapped = false;
  // Use a do/while loop that runs while boolean is true
  do {
    // Reset boolean to false for each pass
    swapped = false;
    // Use a for loop to check each element of the array against the previous element
    for (let i = 1; i < array.length; i += 1) {
      // If currrent value is less than previous value, swap values
      if (array[i] < array[i - 1]) {
        // Store current value in variable
        const current = array[i];
        // Store previous value in variable
        const previous = array[i - 1];
        // Store previous in current index
        array[i] = previous;
        // Store current in previous index
        array[i - 1] = current;
        // Change boolean to true
        swapped = true;
      }
    }
    // Repeat loop while swapped is true
  } while (swapped);
  // Return array
  return array;
}

console.log(bubbleSort([5, 4, 3, 2, 1])); // Returns [1,2,3,4,5]

module.exports = bubbleSort;
