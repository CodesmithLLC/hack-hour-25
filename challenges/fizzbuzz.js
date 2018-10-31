// Write a function that returns an array containing
// the numbers 1 to NUM. Put "fizz" in place of numbers
//divisble by 3, "buzz" in place of numbers divisble by 5,
//and "fizzbuzz" in place of numbers divisble by both 3 and 5
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

  // define resultsArray variable
  let resultsArray = [];

  // iterate from 1 to including number
  for(let i = 1; i <= num; i++) {

    let wkSpace = i;
    let bDiv3, bDiv5;

    // check counter if divisible by 3
    // if yes then replace number with word fizz

    // check counter if divisible by 5
    // if yes then replace number with word buzz

    // check counter if divisible by both 5 & 3 then replace number with
    // fizzbuzz
    bDiv3 = (i % 3 === 0);
    bDiv5 = (i % 5 === 0);

    if( bDiv3 && bDiv5 ) {
      wkSpace = 'fizzbuzz';
    }
    if(bDiv3 && !bDiv5) {
      wkSpace = 'fizz';
    }
    if (bDiv5 && !bDiv3) {
      wkSpace = 'buzz';
    }

    // add result to resultsArray
    resultsArray.push(wkSpace);

  }

  // returns resultsArray variable
  return resultsArray;
}

module.exports = fizzbuzz;
