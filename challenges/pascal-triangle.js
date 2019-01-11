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

function pascalTriangle(numRows, curRow = 0, results = []) {
  // Base Case: when curRow equals numRows exit
  if (curRow === numRows) return results;
  
  // Edge Case: when curRow equals 0 add one to results
  if (curRow === 0) {
    results.push([1]);
    return pascalTriangle(numRows, curRow + 1, results);
  }

  const rowValues = [];
  const lastRow = results[results.length - 1];
  const lastRowLength = lastRow.length;
  

  for (let i = 0; i <= lastRowLength; i += 1) {  
    if (i == 0 ) rowValues.push(lastRow[0]);  // Calculate left outer value
    else if (i === lastRowLength) rowValues.push(lastRow[lastRowLength - 1]);  // Calculate right outer value
    else {
      // Calculate center values
      rowValues.push(lastRow[i-1] + lastRow[i]);
    }
  }
  // Add Row
  results.push(rowValues);
  return pascalTriangle(numRows, curRow + 1, results);
}

module.exports = pascalTriangle;
