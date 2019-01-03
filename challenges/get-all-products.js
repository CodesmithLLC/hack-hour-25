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
  if (array.length === 0) return [0];
  let products = [];
  for (let i = 0; i < array.length; i += 1) {
    let product = 1;
    for (let j = 0; j < array.length; j += 1) {
      if (j !== i) product *= array[j];
    }
    products.push(product);
  }
  return products;
}
console.log(getAllProducts([1, 7, 3, 4])); // Should return [84, 12, 28, 21]
console.log(getAllProducts([0, 1, 3, 4])); // Should return [ 12, 0, 0, 0 ]
console.log(getAllProducts([1, 1, 1, 4])); // Should return [ 4, 4, 4, 1 ]
console.log(getAllProducts([0, 0, 0])); // Should return [ 0, 0, 0 ]
console.log(getAllProducts([0, 1])); // Should return [ 1, 0 ]

module.exports = getAllProducts;
