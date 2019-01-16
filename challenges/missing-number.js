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
function missingNum(array) {
  // declare variable that contains last number
  const last = Math.max(...array);
  // declare a variable
  let sum = 0;
  // iterate through 1 to last number and add into declared variable
  for (let i = 1; i <= last; i += 1) {
    sum = sum + i
  }
  // iterate through the array and subtract from the declared variable
  for (let j = 0; j < array.length; j += 1) {
    sum = sum - array[j]
  }
  // return declared variable
  return sum
}

console.log(missingNum([2,3,1,5]))
module.exports = missingNum;