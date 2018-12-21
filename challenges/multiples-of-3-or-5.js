'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  // iterate from 3 up to 1000, incrementing by 3
  for (let i = 3; i < 1000; i += 3) {
    // add current num to sum
    sum += i;
  }
  // iterate from 5 up to 1000, incrementing by 5
  for (let i = 5; i < 1000; i += 5) {
    // add current num to sum
    sum += i;
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  // iterate from x up to z, incrementing by x
  for (let i = x; i < z; i += x) {
    // add current num to sum
    sum += i;
  }
  // iterate from y up to z, incrementing by y
  for (let i = y; i < z; i += y) {
    // add current num to sum
    sum += i;
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
