/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

const permutations = (array) => {
  if (array.length < 2) {
    // Base case, return single-element array wrapped in another array
    return [array];
  } else {
    let perms = [];
    for (let i = 0; i < array.length; i++) {
      // Make a fresh copy of the passed array and remove the current element from it
      let rest = array.slice();
      rest.splice(i, 1);

      // Call our function on that sub-array, storing the result: an array of arrays
      let ps = permutations(rest);

      // Add the current element to the beginning of each sub-array and add the new
      // permutation to the output array
      const current = [array[i]]

      for (let p of ps) {
        perms.push(current.concat(p));
      }
    };
    return perms;
  }
}

function eachPermutation(arr, callback) {
  // get all permutations from helper function
  const perms = permutations(arr);
  // invoke callback function on each permutation array
  perms.forEach(perm => callback(perm));
}

module.exports = eachPermutation;
