// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  // create a new array to return
  const returnArr = [];
  // have a for loop that starts the index at 1 and goes up to the "num" argument, increasing by 1
  for (let i = 1; i <= num; i += 1) {
    // do an if check to see if i is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      // if it does, push 'fizzbuzz' into the returnArr
      returnArr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      // if its divisible by just 3, then push 'fizz'
      returnArr.push('fizz');
    } else if (i % 5 === 0) {
      // if its divisible by only 5, then push 'buzz'
      returnArr.push('buzz');
    } else {
      // otherwise, just push i into the returnArr
      returnArr.push(i);
    }
  }
  // after the for loop is completed, return the returnArr
  return returnArr;
}

module.exports = fizzbuzz;
