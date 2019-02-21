/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// function uniqueNumber(array) {
//     let value;
//     for(let i = 0; i <array.length; i +=1 ){
        
//         if(array.indexOf(array[i])===array.lastIndexOf(array[i])){
//             value = array[i]
//         }
//     }
//     return value;
// }

function uniqueNumber(array) {
    var store = {};
    
    for (var i = 0; i < array.length; i++) {
      if (array[i] in store) {
        delete store[array[i]];
      } else {
        store[array[i]] = true;
      }
    }
    
    return Object.keys(store)[0];
  }

console.log(uniqueNumber([7,2,7,3,5,3,1,2,1]));// -> 2

module.exports = uniqueNumber;
