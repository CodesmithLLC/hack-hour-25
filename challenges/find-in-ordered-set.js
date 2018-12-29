/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  //create a temp variable to store popped array element
  let temp = arr.pop();

  console.log(temp);
  //if target is equal to popped variable return true
  if(arr.length > 0){
    if(temp === target) return true;
    else{
      temp = arr.unshift();
      if(temp === target) return true;
    }
  }

  
  return false;

}
var nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 45));
module.exports = findInOrderedSet;
