/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  // Declare an output array
  const output = [];

  // Iterate n number of times in reverse
  for (let i = n - 1; i > -1; i -= 1) {
    // Declare a temp subarray
    const tempArray = [];
    // Iterate through each subarray
    grid.forEach((subArray) => {
      // Unshift the ith element of the subarray to the beginning of the temp array
      tempArray.unshift(subArray[i]);
    });
    // Unshift the temp array to the output array
    output.unshift(tempArray);
  }
  // Return output
  return output;
}

const sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateGrid(sampleGrid, 3)); // returns [[7, 4, 1], [8, 5, 2], [9, 6, 3]]


module.exports = rotateGrid;
