/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let hasZero = false;
  const total = array.reduce((a, b) => {
    if (b === 0) {
      hasZero = true;
      return a;
    }
    return a * b;
  }, 1);
  return array.map(el => {
    if (hasZero) {
      return el === 0 ? total : 0;
    }
    return total / el;
  });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 0];

console.log(getAllProducts(arr));
console.log(getAllProducts(arr2));

module.exports = getAllProducts;
