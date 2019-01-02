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
function uniqueNumber(array) {
  const set = {};
  const output = array.reduce((a,b)=>{
    if(set[b] === 0){return b}
    set[b] = 0;
    return a;
  },null)
  return output
}

const arr = [1,2,3,4,5,5,6,7,8,9];
console.log(uniqueNumber(arr))




module.exports = uniqueNumber;
