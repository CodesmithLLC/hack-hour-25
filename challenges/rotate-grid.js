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


 
//************************** REFACTOR LATER **************************

function rotateGrid(grid, n) {
	let count = 0;
	const result = [];
	for (let i = 0; i < n; i += 1) { 
		const array = [];
		for (let x = 0; x < n; x += 1) {
			array.push(grid[x][i]);
		}	
		result.push(array.reverse());
	}
	return result;
}

module.exports = rotateGrid;
