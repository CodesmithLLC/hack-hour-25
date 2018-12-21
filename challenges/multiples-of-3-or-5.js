"use strict";
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let set = new Set();
  for (let i = 0; i < 1000; i += 3) {
    set.add(i);
    sum += i;
  }
  for (let i = 0; i < 1000; i += 5) {
    if (!set.has(i)) {
      sum += i;
    }
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let set = new Set();
  for (let i = 0; i < z; i += x) {
    set.add(i);
    sum += i;
  }
  for (let i = 0; i < z; i += y) {
    if (!set.has(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMultiplesXOrYBelowZ(3, 5, 10));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;
