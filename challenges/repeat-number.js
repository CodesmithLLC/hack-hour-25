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

 // brute force

function repeatNumbers(array) {
  array.sort((a,b)=>a>b)
  let i = array.length-1
  while (i){
    if (array[i--] === array[i]) return array[i]
  }
}

// binary search tree method

function bst (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function checkTree(tree, value) {
  if (value === tree.value) return true;
  if (value < tree.value) {
    if (tree.left === null) {
      tree.left = new bst(value)
      return false; 
    }
    return checkTree(tree.left, value)
  }else{
    if (tree.right === null) {
      tree.right = new bst(value)
      return false; 
    }
    return checkTree(tree.right, value)
  }
}

function repeatNumbers(array) {
  let i = array.length-1
  let tree = new bst(array[i--])
  while (i){
    if (checkTree(tree, array[i]) === true) return array[i];
    i--;
  }
}


console.log(repeatNumbers([1,2,3,4,5,6,6,7,8,9,10]))
module.exports = repeatNumbers;
