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

function repeatNumbers(array) {
  const track = {};
  for (let i = 0; i < array.length; i += 1) {
    if (track[array[i]] !== undefined) {
      track[array[i]] += 1;
    } else {
      track[array[i]] = 1;
    }
  }
  const trackCount = Object.values(track);
  for (let i = 0; i < trackCount.lenght; i += 1) {
    if (trackCount[i] === 2) {
      return Object.keys(track)[i];
    }
  }
  return 'None was found';
}

module.exports = repeatNumbers;
