/* eslint-disable no-restricted-properties */
/* eslint-disable camelcase */
/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  // Declare total variable to track the number of districts crossed
  let total = 0;
  // Declare a function to check if the current circle contains the start or end coordinates
  function contains(index, position_x, position_y) {
    const xDistance = x[index] - position_x;
    const yDistance = y[index] - position_y;
    return Math.pow(xDistance, 2) + Math.pow(yDistance, 2) < Math.pow(r[index], 2);
  }
  // Iterate though input arrays
  for (let i = 0; i < x.length; i += 1) {
    // Declare boolean for result of calling helper function on current circle and start coordinates
    const startContains = contains(i, start_x, start_y);
    // Declare boolean for result of calling helper function on current circle and end coordinates
    const endContains = contains(i, end_x, end_y);
    // If start and end booleans aren't equal, increment total
    if (startContains !== endContains) total += 1;
  }
  // Return total
  return total;
}

const xArray = [2, 4, 6];
const yArray = [2, 4, 5];
const rArray = [2, 2, 2];

console.log(circleCountry(xArray, yArray, rArray, 5, 5, 1, 1)); // Return 3

module.exports = circleCountry;
