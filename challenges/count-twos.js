// Write a function "countTwos" that takes a number as an argument, n.
// The function will return the number of 2s encountered when counting
// from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the
// number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num) {
  if (num <= 1) return 0;
  // create variable to count numOfTwos
  let numOfTwos = 0;
  // split num into array of nums
  const numArray = num.toString().split('').map(numStr => Number(numStr));
  // check length of array
  // if length === 1, return 1
  if (numArray.length === 1) return 1;
  // iterate from 0th el up to last el of numArray
  for (let i = 0; i < numArray.length; i += 1) {
    // if i equals numArray.length - 1; increment numOfTwos by 1 and return numOfTwos
    if (i === numArray.length - 1) {
      numOfTwos += 1;
      return numOfTwos;
    }
    for (let x = 0; x < numArray[i]; x += 1) {
      // on each iteration, iterate from 0 up to and including num, incrementing
      // numOfTwos by 1 each time
      numOfTwos += 1;
    }
  }
  return numOfTwos;
}

console.log(countTwos(1)); // -> 0
console.log(countTwos(3)); // -> 1
console.log(countTwos(13)); // -> 2
console.log(countTwos(1000)); // -> 300
console.log(countTwos(11420)); // -> 4483

// module.exports = countTwos;
