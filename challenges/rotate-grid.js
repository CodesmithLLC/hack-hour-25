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
  let newgrid = [];
  let i = n - 1
  let ii = i
  let k = 0
  let j = 0
  for (let i = 0; i < n; i += 1) {
    newgrid.push([]);
  }
  while (k < n) {
    while (ii >= 0) {
      newgrid[j].push(grid[ii][k]);
      ii -= 1;
      
    }
    i -= 1;
    ii = n - 1;
    k += 1;
    j += 1;
  }
  return newgrid;
}

const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateGrid(grid, 3))
module.exports = rotateGrid;
