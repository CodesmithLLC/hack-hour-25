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

//input: array of nums
//output: array of products

function getAllProducts(array) {
  // create array to store results
  const arr = [];
  // iterate thru array
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      let temp
      arr.push(array[i] * array[j] * array[x]);
    }
  }
  return arr;
}

console.log(getAllProducts([1, 7, 3, 4])) // -> [84, 12, 28, 21]


module.exports = getAllProducts;
