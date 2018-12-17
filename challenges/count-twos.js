// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  // keep track of the total number of 2s
  count = 0;
  // iterate through each number between 0 and num
  for (let i = 0; i <= num; i++) {
    // convert each number into an array that can be scanned for 2s
    let digits = i.toString().split('');
    // convert number to array of digigts, iterate through digits
    for (let j = 0; j < digits.length; j++) {
      // if digit is equal to 2, increment count by 1
      if (digits[j] === '2') count++
    }
  }
  return count;
}

console.log(countTwos(10))

module.exports = countTwos;
