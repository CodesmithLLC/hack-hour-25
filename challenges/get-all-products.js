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

function getAllProducts(array, pointer = 0, products = []) {
  // Base Case: when pointer equals array.length
  if (pointer === array.length) return products;

  // Calculate product for all values except value at pointer in array
  products.push(array.reduce((accum, val, index) => {
    if (index !== pointer) accum *= val;
    return accum;
  }, 1));

  return getAllProducts(array, pointer + 1, products);
}

module.exports = getAllProducts;
