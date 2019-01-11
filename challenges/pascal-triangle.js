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
  if (numRows === 1) return [[1]];
  const newArr = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    const template = [1];
    if (newArr.length > 1) {
      for (let j = 1; j < newArr[i - 1].length; j += 1) {
        const current = newArr[i - 1][j] + newArr[i - 1][j - 1];
        template.push(current)
      }
    }
    template.push(1);
    newArr.push(template);
  }
  return newArr;
}

console.log(pascalTriangle(8))
module.exports = pascalTriangle;
