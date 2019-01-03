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
  // empty array to return later
  const returnArr = [];
  for (let i = 0; i < array.length; i += 1) {
    // for each iteration of the array, make a copy of the array
    const newArr = [...array];
    // splice out the index
    newArr.splice(i, 1);
    // then push the multiplied value of the array into returnArr
    returnArr.push(newArr.reduce((acc, cur) => acc * cur));
  }
  // after the loop, return the return array
  return returnArr;
}

// console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
