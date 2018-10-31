// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, 
//"buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
// input number
// output newarray
// create new array
  let newArr = [];
// we want to iterate through the array
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {newArr.push("fizzbuzz")}
    else if (i % 3 === 0) {newArr.push("fizz")}
    else if (i % 5 === 0) {newArr.push("buzz")}
    else {newArr.push(i)};
// push each elem into new array
// if the elem is divisible by 3, replace with "fizz"
// if the elem is divisible by 5, replace with "buzz"
// if the elem is divisible by 3 and 5, replace with "fizzbuzz"
// return the array
  };
  return newArr;
}

console.log(fizzbuzz(16))//;  -> [ 1,
                    // 2,
                    // 'fizz',
                    // 4,
                    // 'buzz',
                    // 'fizz',
                    // 7,
                    // 8,
                    // 'fizz',
                    // 'buzz',
                    // 11,
                    // 'fizz',
                    // 13,
                    // 14,
                    // 'fizzbuzz',
                    // 16 ]

module.exports = fizzbuzz;
