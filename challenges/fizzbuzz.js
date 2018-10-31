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

// input: number
// output: array


function fizzbuzz(num) {
  // define new array
  const array = [];
  // iterate from range one to num
  for (let i = 1; i <= num; i += 1) {
  // define an empty string
    let string = '';
    // if the number we are on is divisible by 3, add to string the word "fizz"
    if (i % 3 === 0) { string += 'fizz'; }
    // if the number we are on is divisble by 5, add to string the word "buzz"
    if (i % 5 === 0) { string += 'buzz'; }
    // if string is empty, push number into array, else push string into array
    array.push(string ? string : i);
  }
  // return array
  return array;
}

module.exports = fizzbuzz;


console.log(fizzbuzz(20));
