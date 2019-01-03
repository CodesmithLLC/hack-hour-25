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
  if (array.length === 0) return [];
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    let workingArr = array.slice()
    workingArr.splice(i, 1);
    let outputNum = workingArr.reduce((acc, num) => {
      acc *= num;
      return acc;
    })
    result.push(outputNum);
  }
  return result;
}

// function getAllProducts(array) {
//   const result = [];
//   const pairResult = {};
//   for (let i = 0; i < array.length; i += 2) {
//     pairResult[i] = array[i] * array[i+1];
//     console.log('pairResult is ', pairResult);
//     let outputNum = 1;
//     for (let key in pairResult) {

//   }
//   return result;
// }

// console.log(getAllProducts([1, 2, 3, 4])); // 24, 12, 8, 6;

module.exports = getAllProducts;
