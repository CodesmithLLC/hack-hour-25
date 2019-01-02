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
  const set = new Set();
  return array.reduce((a,b)=>{
    if(set.has(b))return b;
    set.add(b);
    return a;
  },-Infinity)
}

//alternative sexy method O(1)space
//add all together, find the sum of 1...n
//leftover is the answer waow
function betterRepeatNumbers(arr){
  let output = arr.reduce((a,b)=>a+b);
  return output - (arr[arr.length-1]/2)*(arr[0]+arr[arr.length-1]);
}


const arr = [1,2,3,4,5,6,7,8,9];
console.log(betterRepeatNumbers(arr));

module.exports = repeatNumbers;
