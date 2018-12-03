/* You are given a NxN grid of elements represented by a 2D array. 
// The ith nested array represents the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]        
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  // create empty array to store results in
  const resultArr = [];
  // reverse grid array
  const revGridArr = grid.reverse();
  // for each array, starting at first element, push results into row array
  for (let i = 0; i < n; i += 1) {
    // push row array into final result array
    const rowArr = [];
    for (let x = 0; x < n; x += 1) {
      rowArr.push(revGridArr[x][i]);
    }
    resultArr.push(rowArr);
  }
  return resultArr;
}

// const sampleGrid = [
//   [1, 2, 3, 55, 78],
//   [4, 5, 6, 44, 7],
//   [7, 8, 9, 33, 5],
//   [17, 18, 19, 22, 3],
//   [1, 2, 3, 4, 5]
// ];

// rotateGrid(sampleGrid, 5);

module.exports = rotateGrid;

