// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let counter = 0;
  // go through all the numbers up to the num
  for (let i = 1; i <= num; i += 1) {
    // take each number and turn it into a string to check each digit
    const holder = i.toString().split('');
    // go through the array and check each element/digit
    for (let j = 0; j < holder.length; j += 1) {
      if (holder[j] === '2') {
        counter += 1;
      }
    }
  }
  return counter;
}

console.log(countTwos(1));  // -> 0
console.log(countTwos(3));  // -> 1
console.log(countTwos(13));  // -> 2
console.log(countTwos(1000));  // -> 300
console.log(countTwos(11420));  // -> 4483

module.exports = countTwos;
