// Write a function that sorts an arr using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) return array;

  let arr = array.slice(0)
  let sorted = 0;

  while(sorted < arr.length) {
    sorted = 0;
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
      } else {
        sorted++
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
