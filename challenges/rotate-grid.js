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
// increment each adjacent pair:

// function rotateGrid(grid, n, starti = 0, startj = 0) {
//   if (n === 1) return grid;
//   if (n === 2) {
//     // do if n = 2;
//   }
//   const direction = ['right', 'down', 'left', 'up'];
//   const currDirection = direction[0];
//   let i = starti;
//   let j = startj;
//   let current = grid[starti][startj];
//   let next = grid[starti][startj];

// }

/*
shift corner: 
start with first Element, shift where it's supposed to be.
then shift the shifted and so on for one round;  then go to next element.
*/

function rotateGrid(grid, n) {
  for (let i = 0; i < Math.floor(n / 2); i++) {
    const first = i;
    const last = n - 1 - i;

    for (let j = first; j < last; j++) {
      const adjust = j - first;   // 1
      const top = grid[first][j];   // grid 0,

      // left -> top
      grid[first][j] = grid[last - adjust][first];

      // bottom -> left
      grid[last - adjust][first] = grid[last][last - adjust];

      // right -> bottom
      grid[last][last - adjust] = grid[j][last];

      // top -> right
      grid[j][last] = top;
    }
  }
  return grid;
}


module.exports = rotateGrid;
