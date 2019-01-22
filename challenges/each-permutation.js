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

function getPerms(arr) {
  if (arr.length === 1) return [arr];
  const copyArr = [...arr];
  const first = copyArr.shift();
  const prev = getPerms(copyArr);
  const result = [];
  prev.forEach((prevArr) => {
    for (let i = 0; i <= prevArr.length; i += 1) {
      const toAdd = [...prevArr];
      toAdd.splice(i, 0, first);
      result.push(toAdd);
    }
  });
  return result;
}
function eachPermutation(arr, callback) {
  const perms = getPerms(arr);
  perms.forEach(callback);
}
// getPerms([1, 2, 3]);
// eachPermutation([1, 2, 3], function(perm) {
//   console.log(perm)
// });

module.exports = eachPermutation;
