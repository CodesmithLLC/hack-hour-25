/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// recursive
function highestProduct(array, currProd = 1, intLeft = 3) {
  if (!(array instanceof Array)) return 0;
  if (intLeft === 0) return currProd;
  if (array.length === 0) return 0;
  const newArr1 = [...array];
  const first = newArr1.shift();
  // console.log('first: ', first);
  const intDecrement = intLeft - 1;
  const useFirst = highestProduct(newArr1, currProd * first, intDecrement);
  const dontUseFirst = highestProduct(newArr1, currProd, intLeft);
  return Math.max(useFirst, dontUseFirst);
}

// iterative
function highestProduct2(array) {
  // get array of positives
  // arro of zeroes
  // arr of negatives
  // if two or more negatives, see if two negatives product bigger than
  const negatives = [];
  const zeroes = [];
  const positives = [];
  array.forEach((el) => {
    if (el < 0) {
      negatives.push(el);
    } else if (el === 0) {
      zeroes.push(el);
    } else {
      positives.push(el);
    }
  });
}

console.log(highestProduct([2, 3, 4, 5, 6]));

module.exports = highestProduct;
