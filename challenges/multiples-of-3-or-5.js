'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  // Define a natural numbers array
  const natNums = [];
  // Iterate from 1 to 1000
  for (let num = 1; num < 1000; num += 1) {
  // if the current number divided by 3 or 5 has no remainder,
  // push the number to natural numbers array
    if (num % 3 === 0 || num % 5 === 0) {
      natNums.push(num);
    }
  }
  // Sum up the natural numbers array
  // Return the sum
  return natNums.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const natNums = [];
  // Iterate from 1 to z
  for (let num = 1; num < z; num += 1) {
  // if the current number divided by x or y has no remainder,
  // push the number to natural numbers array
    if (num % x === 0 || num % y === 0) {
      natNums.push(num);
    }
  }
  // Sum up the natural numbers array
  // Return the sum
  return natNums.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

console.log(sumMultiplesXOrYBelowZ(3, 5, 100));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
