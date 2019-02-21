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

function eachPermutation(arr, callback) {
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function heaps(i) {
    if (i === arr.length) {
      callback(arr);
    }
    for (let j = i; j < arr.length; j += 1) {
      swap(arr, i, j);
      heaps(i + 1);
      swap(arr, i, j);
    }
  }

  heaps(0);
}


module.exports = eachPermutation;
