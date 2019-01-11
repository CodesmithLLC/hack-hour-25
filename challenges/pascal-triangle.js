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
  if (numRows === 0) return [];
  const result = [[1]];
  let row = 1;
  while (row < numRows) {
    const ref = result[result.length - 1];
    const newArr = [1];
    for (let i = 0; i < ref.length - 1; i += 1) {
      newArr.push(ref[i] + ref[i + 1]);
    }
    newArr.push(1);
    result.push(newArr);
    row += 1;
  }
  return result;
}

module.exports = pascalTriangle;
