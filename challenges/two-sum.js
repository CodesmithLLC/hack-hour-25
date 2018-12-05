/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const stack = [];
  function sumRecurse(array) {
    // base case
    if (array.length === 1) {
      return stack.push(array[0]);
    }
    // grab the first element in the array
    const firstEl = array[0];
    // slice the array
    const newArr = array.slice(1);
    // go through the new array and add the first el and then push to the stack
    newArr.forEach((el) => {
      stack.push(firstEl + el);
    });
    return sumRecurse(newArr);
  }
  // recurse and add to stack
  sumRecurse(arr);
  // now run includes to see if target is inside the stack
  return stack.includes(n);
}

// console.log(twoSum([1, 2, 3, 4, 5], 5));

module.exports = twoSum;
