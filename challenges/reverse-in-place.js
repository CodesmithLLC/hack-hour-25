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
    let tempVar;
//iterate over input array
for(let i = 0; i < array.length; i++){
    tempVar = array[array.length-1];
    //console.log(tempVar)
    // array.push(array[i]);
    // array.unshift(tempVar);
}
    return array;
}

console.log(reverseInPlace([1,2,3,4,]));
module.exports = reverseInPlace;
