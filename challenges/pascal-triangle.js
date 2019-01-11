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
  const output = [];
  if (numRows === 1) output.push([1])
  if (numRows >= 2) output.push([1], [1, 1]);
  for (let i = 2; i < numRows; i += 1) {
    let lastArr = output[output.length - 1];
    let innerArr = [1];
    for (let j = 0; j < lastArr.length; j += 1) {
      if (lastArr[j + 1] === undefined) innerArr.push(1);
      else innerArr.push(lastArr[j] + lastArr[j+1]);
    }
    output.push(innerArr);
  }
  return output;
}

console.log(pascalTriangle(5))

module.exports = pascalTriangle;
