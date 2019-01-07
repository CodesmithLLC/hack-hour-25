/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
// input: nested array containing two numbers
// output: nested array, condensed
// start out by declaring an new array to contain all the numbers
  let newArr = [];
// iterate through the array and take everything out and put it into a new array
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (!newArr.includes(array[i][j])) newArr.push(array[i][j])
    }
  }
// // iterate through the new Array and start filtering out the numbers
// // in iteration check to see if the number before is greater than that number; if it is, remove current and check to see if the prev number is less than the next number; if it is, remove prev 
//   for (let k = 1; k < newArr.length; k += 1) {
//     if (newArr[k] < newArr[k - 1]) {
//       if (newArr[k + 1]) {
//         if (newArr[k-1] < newArr[k+1]) {
//           newArr.splice(k - 1, 2)
//         } else {newArr.splice(k, 1)}
//       } else {newArr.splice(k, 1)}
//     }
//   }
//   // then iterate through the updated array and put them into arrays of twos
//   let output = [];
//   for (let l = 0; l < newArr.length; l += 1) {
//     let insideArr = [];
//     insideArr.push(newArr[l]);
//     insideArr.push(newArr[l + 1]);
//     output.push(insideArr);
//     l += 1;
//   }
//   return output
  for (let k = 1; k < newArr.length; k += 1) {
    if (newArr[k-2]) {
      if (newArr[k] > newArr[k-2] && newArr[k - 1] > newArr[k]) {
        newArr.splice(k - 1, 2)
      }
      if (newArr[k] < newArr[k - 1] && newArr[k] < newArr[k - 2]) {
        for (let j = 0; j < newArr.length; j += 1) {
          if (newArr[k] < newArr[j]) {newArr[j] = newArr[k]; break}
        }
        newArr.splice(k, 1)
      }
    }
  }
  let output = [];
  for (let l = 0; l < newArr.length; l += 1) {
    let insideArr = [];
    insideArr.push(newArr[l]);
    insideArr.push(newArr[l + 1]);
    output.push(insideArr)
    l += 1
  }
  return output
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times))//; -> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
