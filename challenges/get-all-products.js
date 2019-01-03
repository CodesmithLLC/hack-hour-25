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
// we have an array of numbers, we want to return the product of all other numbers than the current
// first we declare a product array'
if (array.length === 0) {return [0]}
let productArr = [];
let copyArr = array.slice();
// we need to iterate through the array
for (let i = 0; i < copyArr.length; i += 1) {
// at each number, let a new array = to the array with the current number spliced out
    copyArr.splice(i, 1);
// iterate through that array and multiply every number
    const product = copyArr.reduce((accum, curr) => {return accum * curr}, 1)
// put the product into the product array
    productArr.push(product);
    copyArr = array.slice()
}
// return prodcut array
return productArr;
}

console.log(getAllProducts([1, 7, 3, 4]))
module.exports = getAllProducts;
