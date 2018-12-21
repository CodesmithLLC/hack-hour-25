'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0, temp;
  temp = Math.floor(999/3)
  sum += ( temp*(temp + 1) / 2)
  temp = Math.floor(999/5)
  sum += ( temp*(temp + 1) / 2)
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0, temp;
  temp = Math.floor((z-1)/x)
  sum += ( temp*(temp + 1) / 2)
  temp = Math.floor((z-1)/y)
  sum += ( temp*(temp + 1) / 2)

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
