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
  // push all arrays into returnArr
  const returnArr = [];
  // loop to n
  for (let i = 1; i <= numRows; i += 1) {
    // inner array that will push into returnArr
    const innerArr = [];
    // 1 and 2 length will be put in
    if (i === 1) {
      innerArr.push(1);
      returnArr.push(innerArr);
    }
    if (i === 2) {
      innerArr.push(1, 1);
      returnArr.push(innerArr);
    }
    // after 2, we can do array operations for pascals
    if (i > 2) {
      // push in the first and last number
      innerArr.push(returnArr[i - 2][0]);
      // have a for loop to go through the last innerArr and add the numbers up, then push into innerArr
      for (let j = 1; j < returnArr[i - 2].length; j += 1) {
        innerArr.push(returnArr[i - 2][j] + returnArr[i - 2][j - 1]);
      }
      // add in last number
      innerArr.push(returnArr[i - 2][returnArr.length - 1]);
      // after looping is done, push into returnArr
      returnArr.push(innerArr);
    }
  }
  // return the tree
  return returnArr;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
