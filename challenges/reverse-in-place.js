// 'use strict';
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
    // for loop through the array
        for (let i = 0; i < Math.ceil((array.length-1)/2); i++) {
            // create a new temp array 
            let temp = array[i];
              // set first half of array to equal second half
            array[i] = array[array.length-1 - i];
              // set second half of array to equal first half
            array[array.length -1 - i] = temp;
        };
        return array;
    }
    

module.exports = reverseInPlace;
