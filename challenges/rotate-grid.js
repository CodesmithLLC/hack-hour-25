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
  for (let i = 0; i < n; i += 1) {
    console.log(grid[i]);
  }

  //recursive case
  if (n <= 1) {
    return grid;
  }

  //this is the outer portion
  let hold = "butt";
  //going down right side
  for (let i = 0; i < n; i += 1) {
    [hold, grid[i][n - 1]] = [grid[i][n - 1], hold];
  }
  //left across bottom
  for (let i = grid[n - 1].length - 2; i >= 0; i -= 1) {
    [hold, grid[n - 1][i]] = [grid[n - 1][i], hold];
  }
  //bottom left to top
  for (let i = n - 2; i >= 0; i -= 1) {
    [hold, grid[i][0]] = [grid[i][0], hold];
  }
  //top left to right
  for (let i = 1; i < n; i += 1) {
    [hold, grid[0][i]] = [grid[0][i], hold];
  }

  console.log("hold: ", hold);
  for (let i = 0; i < n; i += 1) {
    console.log(grid[i]);
  }

  //if even do a thing
  if (n % 2 === 0) {
  }
  //if odd do a thing
  if (n % 3 === 0) {
  }
}

rotateGrid([[0, 1, 2], [3, 4, 5], [6, 7, 8]], 3);

module.exports = rotateGrid;
