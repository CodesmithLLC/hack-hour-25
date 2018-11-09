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
  // create a variable to track the rear
  let rear = array.length - 1;
  // have a for loop to iterate over the array
  for (let i = 0; i < array.length; i += 1) {
    // check to see if the front and the rear are the same, or front is bigger than rear
    if (i === rear || i > rear) {
      // just return the array
      return array;
    }
    // create a variable to store a certain index to prevent deletion
    let temp = array[i];
    // assign the rear to the front
    array[i] = array[rear];
    // assign the rear the front value using temp
    array[rear] = temp;
    // decrement the rear for the next loop
    rear -= 1;
  }
  // after the loop is done, return array
  return array;
}

// console.log(reverseInPlace([0, 1, 2, 3]));
// console.log(reverseInPlace([0, 1, 2, 3, 4]));


module.exports = reverseInPlace;
