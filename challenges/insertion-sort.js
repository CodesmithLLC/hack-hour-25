// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
  let index = 0;
  const array = arr;
  while(index < array.length){
    for(let i = index; i>=0;i-=1){
      if(array[i]<array[i-1]){
        [array[i],array[i-1]] = [array[i-1],array[i]];
      }
    }
    index += 1;
  }
  return array;
}

const arr = [9,5,8,6,7,0,1,4,3,2];
console.log(insertionSort(arr))

module.exports = insertionSort;