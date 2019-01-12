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

function generateRow(array) {
  const row = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      row.push(1);
    }
    if (array[i + 1]) {
      row.push(array[i] + array[i + 1])
    }
  }
  return row;
}

function pascalTriangle(numRows, count = 2, output = [[1],[1,1]]) {
  if (numRows < 1) return
  if (numRows === 1) return output[0];
  if (count === numRows) return output;
  if (count < numRows) {
    output.push(generateRow(output[output.length - 1]))
    return pascalTriangle(numRows, count + 1, output)
  }
}

module.exports = pascalTriangle;

