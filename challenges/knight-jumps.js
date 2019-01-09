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
  const position = str
    .replace(/[()]/g,'')
    .split(' ')
    .map(char => Number(char));

  const moves = [
    [1,2],
    [2,1],
    [2,-1],
    [1,-2],
    [-1,-2],
    [-2,-1],
    [-2,1],
    [-2,1]
  ];

  return moves.reduce((accum, element) => {
    const move = [position[0] + element[0], position[1] + element[1]]
    if ((move[0] >= 1 && move[0] <= 8) && (move[1] >= 1 && move[1] <= 8)) {
      accum += 1;
    }
    return accum;
  },0);
}
e
module.exports = knightjumps;
