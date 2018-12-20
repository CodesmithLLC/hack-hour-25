/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */
// [1, 2, 3, 4, 1, 5, 6];
function repeatNumbers(array) {
  const obj = {};
  let result;
  array.forEach(el => {
    if (obj.hasOwnProperty(el)) {
      result = el;
    } else {
      obj[el] = 0;
    }
  });
  return result;
}


console.log(repeatNumbers([1, 2, 3, 1, 5, 6]));

module.exports = repeatNumbers;
