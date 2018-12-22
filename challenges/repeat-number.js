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
    // if (array === 0 || !Array.isArray(array)) {
    //     return 0;
    // }
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (i === array[i]) {
            result = array[i]
        }
    }
    return result
}
console.log(repeatNumbers([1, 23, 4, 1]))//1
console.log(repeatNumbers([8, 4, 3, 4, 1]))//4
console.log(repeatNumbers([2, 1, 5, 5, 3, 4]))//5
module.exports = repeatNumbers;
