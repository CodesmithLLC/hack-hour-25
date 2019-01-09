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
  const nums = str.replace(/[^0-9]/g, '');
  const numArr = nums.split('')
  const x = Number(numArr[0]);
  let xScore = 0;
  const y = Number(numArr[1]);
  let yScore = 0;
  const board = {
    1: [1, 8],
    2: [2, 7],
    4: [3, 4, 5, 6],
  };
  for (let key in board) {
    if (board[key].includes(x)) xScore += Number(key);
    if (board[key].includes(y)) yScore += Number(key);
  }
  return xScore + yScore;

}

console.log(knightjumps('(6 2)'))


module.exports = knightjumps;
