/*  Given an array of numbers and a target number, return true if there are
    two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // iterate thru array using reduce. set initial val to false
  let arrCopy = [...arr];
  return arr.reduce((bool, curr, i) => {
    let tempArr = arrCopy.slice(i + 1);
    // on each iteration, check if current el minus n exists in array
    // if so, set initialVal to true
    if (tempArr.includes(n - curr)) bool = true;
    // return initial val on each iteration'
    return bool;
  }, false);
}

module.exports = twoSum;
