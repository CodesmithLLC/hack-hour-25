// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let sorted = true;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      sorted = false;
      const curr = array[i];
      array[i] = array[i + 1];
      array[i + 1] = curr;
    }
  }
  if (!sorted) return bubbleSort(array);
  return array;
}

console.log(bubbleSort([2, 1]));

module.exports = bubbleSort;
