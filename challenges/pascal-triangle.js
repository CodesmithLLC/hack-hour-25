/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  // create result array
  const resultArr = [];
  // iterate from 1 up to numRows
  for (let i = 1; i <= numRows; i += 1) {
    const rowArr = [];
    // iterate from 1 to current num
    for (let x = 1; x <= i; x += 1) {
      // if num is less than or equal to 2, push 1 onto array and push array onto result array
      if (x <= 2) rowArr.push(x);
      // otherwise, iterate from 0th el to end of result array, pushing el plus subsequen el onto new arr
      if (x > 2) {
        for (let j = 2; j < resultArr[j - 1].length; j += 1) {
          rowArr.push(resultArr[j - 1][j] + resultArr[j - 1][j + 1])
        }
      }
    }
    resultArr.push(rowArr);
  }
  return resultArr;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
