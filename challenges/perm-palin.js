/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

const checkPalin = (arr) => {
  // go through the the array from front and back and check if each character is equal to each other
  // pointers
  let front = 0;
  let back = arr.length - 1;
  // while loop to get to the middle and checking the characters along the way
  while (front < back) {
    if (arr[front] === arr[back]) {
      front += 1;
      back -= 1;
      continue;
    } else {
      return false;
    }
  }
  // if the loop went through and didnt return false, then it is a palindrome, return true
  return true;
};

function permPalin(str) {
  // if the string is less than 2, then there are no permuations
  if (str.length < 2) return true;
  // first split the string into an array
  const wordArr = str.split('');
  // an empty array to store perms
  const perms = [];
  // have a stack
  const stack = [];
  // do permutations on the wordArr
  function doPerm() {
    // if theres nothing left in the wordArr, then give all the stack results into perm
    if (wordArr.length === 0) {
      perms.push(stack.slice());
    }
    // if there are something inside the wordArr, then
    for (let i = 0; i < wordArr.length; i += 1) {
      // grab the first element and push into the stack
      let x = wordArr.splice(i, 1);
      stack.push(x);
      // recurse
      doPerm();
      // if the recurse is done, do not need anything in the stack anymore
      stack.pop();
      // insert x in the ith position
      wordArr.splice(i, 0, x);
    }
  }
  doPerm();
  // console.log(perms);
  // after the permutations, check to see if the array of each perm with the checker function
  return perms.map(el => el.join('')).some(checkPalin);
}

console.log(permPalin('abaaaa'));

module.exports = permPalin;