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
  let totalAll = 1;
  array.forEach(num => totalAll *= num);
  if (totalAll === 0) {
    let zeroCount = 0;
    array.forEach((num) => {
      if (num === 0) zeroCount += 1;
    });
    if (zeroCount > 1) return [0];
    const indexOfZero = array.indexOf(0);
    let totalWOZero = 1;
    array.forEach((num, i) => {
      if (i !== indexOfZero) totalWOZero *= num;
    });
    return [0, totalWOZero];
  }
  const result = [];
  array.forEach(num => result.push(totalAll / num));
  return result;
}

console.log(getAllProducts([2, 3, 4]))

module.exports = getAllProducts;
