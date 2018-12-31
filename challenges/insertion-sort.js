// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // console.log(array);
  // iterate thru the array starting at element 1
  for (let i = 1; i < array.length; i += 1) {
    // console.log(`Evaluating: ${array[i]} @ pos: ${i}`);
    // Iterate backward until until in right position
    for (let j = i; j > 0; j -= 1) {
      // console.log(`Comparing: ${array[j]} against: ${array[j - 1]}`)
      // if current element is less than previous element swap
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else break;
    }
  }
  return array;
}

module.exports = insertionSort;