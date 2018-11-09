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
    const len = array.length;
    const middle = (array.length % 2 === 0) ? array.length / 2 : Math.ceil(array.length / 2);
    let tracker = 1;
    for (let i = 0; i < middle; i++) {
        let first = array[i];
        let last = array[len - tracker];
        array[i] = last;
        array[len - tracker] = first;
        tracker++;
    }
    return array;
}

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4, 5, 6];
console.log(reverseInPlace(testArray1)); // Should equal [5, 4, 3, 2, 1];
console.log(reverseInPlace(testArray2)); // Should equal [6, 5, 4, 3, 2, 1];

module.exports = reverseInPlace;
