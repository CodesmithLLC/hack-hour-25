/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// one loop
function twoSum(arr, n) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true;
    } else {
      map[n - arr[i]] = n - arr[i];
    }
  }
  return false;
}

// two loops
// function twoSum(arr, n) {

//   let includes = false;
//   const target = arr.map(num => (num - n) * -1);

//   arr.forEach(num => {
//     if (target.includes(num)) {
//       includes = true;
//     }
//   });
//   return includes;
// }

module.exports = twoSum;
