/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const array = arr.filter(num => num<=n);
  for(let i = 0; i<array.length; i+=1){
    for(let j = 1; j<array.length; j+=1){
      if(array[j]+array[i] === n)return true;
    }
  }
  return false;
}

module.exports = twoSum;
