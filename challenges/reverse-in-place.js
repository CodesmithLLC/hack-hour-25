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
    //delcare varible to track the head 
    //  delcare a varible to track the tail
    // iterate over array 
    // assign head with tail 
    // assign tail with head and 
    // increment both head and tail
    // return array 

    let head = 0;
    let tail = array.length - 1;

    while (head < tail) {
        array[head] = array[tail];
        array[tail] = array[head]
        head += 1;
        tail -= 1;
    }
    return array;

}

module.exports = reverseInPlace;

console.log(reverseInPlace(['s', 't', 'a', 'r']));