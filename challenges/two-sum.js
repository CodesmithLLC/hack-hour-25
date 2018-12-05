/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  arr.sort((a,b)=>a-b);
  for (let left = 0; left < arr.length; left++ ) {
    const test = n - arr[left];
    let right = left + 1;
    while (arr[right++] < test) {}
    if (arr[right-1] === test) {
      return true;
    }  
  }
}

module.exports = twoSum;
