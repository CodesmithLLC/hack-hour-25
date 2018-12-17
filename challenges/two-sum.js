/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr.length; j += 1) {
//       if (j !== i) {
//         if (arr[i] + arr[j] === n) return true;
//       }
//     }
//   }
//   return false;
// }

function twoSum(arr, n, i = 0) {
  const sums = [];
  function inner(array) {
    console.log(i, array.length);
    if (i === array.length) return false;
    if (!sums[n]) {
      array.forEach((num, j) => {
        console.log(sums);
        if (i !== j) sums.push(arr[i] + arr[j]);
        // return inner(array, n, ++i);
      });
    }
    return true;
  }
  return inner(arr);
}

sumArray1 = [1, 2, 3, 4, 5];
console.log(twoSum(sumArray1, 5));

// sumArray2 = [2, 2, 2, 2, 2];
// console.log(twoSum(sumArray2, 3));

module.exports = twoSum;
