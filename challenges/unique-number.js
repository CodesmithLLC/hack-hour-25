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
  if (array.length === 0) return false;
  // create object to store nums as keys and number of times occured as values
  const pairsObj = {};
  // iterate thru array
  for (let i = 0; i < array.length; i += 1) {
    // if num exists, increment it's corresponding value
    if (pairsObj[array[i]]) pairsObj[array[i]] += 1;
    // otherwise, set num as key and val equal to 1
    if (!pairsObj[array[i]]) pairsObj[array[i]] = 1;
  }
  // iterate thru object's keys and return key where val is equal to 1
  const keys = Object.keys(pairsObj);
  for (let i = 0; i < keys.length; i += 1) {
    if (pairsObj[keys[i]] === 1) return keys[i];
  }
  return false;
}

module.exports = uniqueNumber;
