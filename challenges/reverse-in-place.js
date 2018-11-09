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
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  const half = Math.floor(array.length / 2);
  console.log(half)
  for (let i = 0; i <= half - 1; i += 1) {
    let first = array[i]
    let last = array[array.length - i - 1];
    console.log('f: ' + first);
    console.log('l :' + last)
    array[i] = last;
    array[array.length - i - 1] = first;
  }
  return array;
}

console.log(reverseInPlace([1, 2, 3, 4, 5, 6, 7]));

module.exports = reverseInPlace;
