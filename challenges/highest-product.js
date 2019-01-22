/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => a - b);
  
  return array
    .slice(array.length - 3)
    .reduce((a, b) => a * b, 1)
}

const array = [7,10,5,3,0,2];

console.log(highestProduct(array));

module.exports = highestProduct;
