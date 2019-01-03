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

// Version 1
function getAllProducts(array) {
  // Return an array with zero if the array is empty
  if (array.length === 0) return [0];
  // Declare output array
  const output = [];
  // Iterate through array (outer)
  for (let i = 0; i < array.length; i += 1) {
    // Declare temp total variable
    let total = 1;
    // Iterate through array (inner)
    for (let j = 0; j < array.length; j += 1) {
      // If i not equal to j, multiply value by temp total
      if (i !== j) total *= array[j];
    }
    // In outer loop, push temp total to output array
    output.push(total);
  }
  // Return output array
  return output;
}

// Version 2
// function getAllProducts(array) {
//   if (array.length < 2) return [0];
//   const productsUpTo = [];
//   const products = [];
//   let currProduct = 1;
//   for (let i = 0; i < array.length; i += 1) {
//     productsUpTo[i] = currProduct;
//     currProduct *= array[i];
//   }
//   // console.log('productsUpTo', productsUpTo);
//   currProduct = 1;
//   for (let i = array.length - 1; i >= 0; i--) {
//     products[i] = currProduct * productsUpTo[i];
//     // console.log('currProduct', currProduct, 'productsUpTo[i]', productsUpTo[i])
//     currProduct *= array[i];
//   }
//   return products;
// }

// Version 3
// // Define a function with one parameters: an array of integers
// function getAllProducts(array) {
//   // Create an array to store products
//   const resultArray = [];
//   // Iterate through array
//   for (let i = 0; i < array.length; i += 1) {
//     // Create a temp array to store integers to be multiplied
//     const tempArray = [];
//     // Push all integers not equal to array[i] to the temp array
//     for (let j = 0; j < array.length; j += 1) {
//       if (i !== j) {
//         tempArray.push(array[j]);
//       }
//     }
//     // Use reduce to determine product of temp array and push to result array
//     resultArray.push(tempArray.reduce((acc, cur) => acc * cur, 1));
//   }
//   // Return an array of products
//   return resultArray;
// }

console.log(getAllProducts([1, 7, 3, 4])); // Should return [84, 12, 28, 21]
console.log(getAllProducts([0, 1, 3, 4])); // Should return [ 12, 0, 0, 0 ]
console.log(getAllProducts([1, 1, 1, 4])); // Should return [ 4, 4, 4, 1 ]
console.log(getAllProducts([0, 0, 0])); // Should return [ 0, 0, 0 ]
console.log(getAllProducts([0, 1])); // Should return [ 1, 0 ]

module.exports = getAllProducts;
