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
 * Since strings are immutable in javascript, 
 * we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {

    let arrayLength = array.length;
    let temp;

    // Iterate thru array
    for (let i = 1; i <= Math.ceil(arrayLength/2); i += 1) {
        // store right most character
        temp = array[i - 1];
        // move left most character right
        array[i - 1] = array[arrayLength - i];
        // move stored character left
         array[arrayLength - i] = temp;
    }
    return array;
}

module.exports = reverseInPlace;
