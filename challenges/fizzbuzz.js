// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz"
// in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and
// "fizzbuzz" in place of numbers divisble by both 3 and 5
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

// input: number
// output: array of numbers 1 up to num

function fizzbuzz(num) {
  // create empty array to store results in
  const resultArr = [];
  // iterate from 1 up to and including num
  for (let i = 1; i <= num; i += 1) {
    // check if current num is divible by 3 && 5. if so, push 'fizzbuzz' into result array
    // check if num is divisible by 3. if so push 'fizz' into array
    // check if num is divisible by 5. if so push 'buzz' into array
    // otherwise, push num into array
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      resultArr.push('fizz');
    } else if (i % 5 === 0) {
      resultArr.push('buzz');
    } else resultArr.push(i);
  }
  return resultArr;
}

module.exports = fizzbuzz;
