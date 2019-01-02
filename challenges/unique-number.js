/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  // have a pointer for start and finish
  let start = 0;
  let end = array.length - 1;
  // create an object to hold pairs of numbers
  const pairs = {};
  // do a while loop to add to the pairs
  while (start <= end) {
    if (pairs.hasOwnProperty(array[start]) === true) {
      pairs[array[start]] += 1;
    } else {
      pairs[array[start]] = 1;
    }
    if (pairs.hasOwnProperty(array[end]) === true) {
      pairs[array[end]] += 1;
    } else {
      pairs[array[end]] = 1;
    }
    start += 1;
    end -= 1;
  }
  // after loop is finished, then the remaining key value pair in the pairs object is our unique number
  return Object.keys(pairs).filter((el) => {
    if (pairs[el] < 2) {
      return el;
    }
  })[0];
}

console.log(uniqueNumber([1,2,1,3,3])); // -> 2

module.exports = uniqueNumber;
