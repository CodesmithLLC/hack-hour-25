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

// Brute force approach
function pascalTriangle(numRows) {
  // Declare an array of arrays with an initial subarray of 1
  const triangleArray = [[1]];
  // Iterate n number of times
  for (let i = 0; i < numRows - 1; i += 1) {
    // Declare a temp array
    const tempArray = [];
    // Declare a variable for the current subarray
    const subArray = triangleArray[i];
    // Iterate through the last subarray
    for (let j = 0; j < subArray.length; j += 1) {
      // If index 0, push value to the temp array
      if (j === 0) tempArray.push(subArray[j]);
      // If index + 1 not equal to undefined, and index and index + 1 and push to the temp array
      if (subArray[j + 1] !== undefined) tempArray.push(subArray[j] + subArray[j + 1]);
      // If index + 1 equals undefined, push value to the temp array
      if (subArray[j + 1] === undefined) tempArray.push(subArray[j]);
    }
    // In the outer loop, push the temp array to the triangle array
    triangleArray.push(tempArray);
  }
  // Return the triangle array
  return triangleArray;
}

console.log(pascalTriangle(3));
console.log(pascalTriangle(6));

module.exports = pascalTriangle;
