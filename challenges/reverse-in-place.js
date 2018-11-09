'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters
 * instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  let sub = 0;
  let half = Math.ceil(array.length / 2);
  // iterate thru array
  for (let i = array.length - 1; i > half; i -= 1) {
    // for each char in array,
    if (array.length % 2 === 0 && sub < Math.floor(array.length / 2) - 1) {
      let temp = array[i];
      array[i] = array[sub];
      array[sub] = temp;
      sub += 1;
    }
  }
  return array;
}

module.exports = reverseInPlace;
