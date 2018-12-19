// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  // Define output variable
  let output = 0;
  // Iterate from one to num
  for (let i = 1; i <= num; i += 1) {
    // Pass current number to helper function and add return value to output
    output += counter(i);
  }
  // Return output
  return output;
}

// Define a helped function to process each number
function counter(num) {
  // Define count variable
  let count = 0;
  // Split number into an array
  const numArray = num.toString().split('');
  // Iterate through number array
  for (let i = 0; i < numArray.length; i += 1) {
    // If element equals 2, increment the count variable
    if (Number(numArray[i]) === 2) {
      count += 1;
    }
  }
  // Return count
  return count;
}

// SOLUTION 1
// function countTwos(num) {
//     let count = 0;
//     for (let i = 2; i <= num; i++) {
//       i.toString().replace(/2/g, () => count++);
//     }
//     return count;
// }

console.log('Count: ', countTwos(1)); // -> 0
console.log('Count: ', countTwos(3)); // -> 1
console.log('Count: ', countTwos(13)); // -> 2
console.log('Count: ', countTwos(1000)); // -> 300
console.log('Count: ', countTwos(11420)); // -> 4483

module.exports = countTwos;
