/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
function missingNum(Array) {
  let missing=0;
  // let count = Array[Array.length-1]
let max = Math.max(...Array);
// console.log(max)
  for(let i = 0; i < max; i += 1) {
    // console.log(i)
    if(Array.indexOf(i) ===-1)
    missing += i;
  }
  return missing;
}

// var numbers = [0,1,3,4,5,7,8]; // Missing 2,6
// var lastNumber = numbers.length - 1;


// console.log(lastNumber)
console.log(missingNum([2,3,1,5,4,7]));
console.log(missingNum([2,14,15,3,1,5,13,11,12,6,4,7,9,10,]));
module.exports = missingNum;