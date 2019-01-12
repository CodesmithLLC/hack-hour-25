// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  // Declare a variable to track the number of possible moves
  let totalMoves = 0;
  // Declare an array of arrays of possible moves
  const possibleMoves = [-2, 1, -2, -1, 2, 1, 2, -1, 1, 2, -1, 2, 1, -2, -1, -2];
  // Split string into an array removing parens
  const values = str.replace(/[{()}]/g, '').split(' ');
  const x = Number(values[0]);
  const y = Number(values[1]);
  // Iterate through moves array
  for (let i = 0; i < possibleMoves.length; i += 2) {
    if (x + possibleMoves[i] > 0 && y + possibleMoves[i + 1] > 0
      && x + possibleMoves[i] < 9 && y + possibleMoves[i + 1] < 9) {
      totalMoves += 1;
    }
  }

  // Return moves
  return totalMoves;
}

const str = '(4 5)';
console.log(knightjumps(str));

module.exports = knightjumps;
