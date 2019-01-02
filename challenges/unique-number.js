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
  const set = new Set();

  array.forEach(num => {
    !set.has(num) ? set.add(num) : set.delete(num);
  })
  const iterator = set.values();

  return iterator.next().value;
}


// function uniqueNumber(array) {
//   // store value and number of occurances as key/value pair
//   const cache = array.reduce((a,b) => {
//     !a[b] ? a[b] = 1 : a[b] += 1;
//     return a;
//   },{})
//   // convert key/value pairs to arrays
//   const pairs = Object.entries(cache);

//   let uniqNum;
//   // iterate through pairs. if value is 1, store on uniqNum, return uniqNum
//   pairs.forEach(pair => {
//     const [ key, value ] = pair;
//     if (value === 1) uniqNum = key;
//     return;
//   })

//   return uniqNum;
// }

console.log(uniqueNumber([1,2,1,3,3]))

module.exports = uniqueNumber;
