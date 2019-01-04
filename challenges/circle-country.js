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

function circleCountry(x, y, r, startX, startY, endX, endY) {
  let traverseDistrictCounter = 0
  // x increases move right, x decreases move left
  // y increases move up, y decreases move down
  const right = (endX >= startX);
  const down = (endY >= startY);
  // Determine slope
  const slope = ((startY - endY) / (startX - endX));

  // iterate thru district arrays
  for (let i = 0; i < r.length; i += 1) {
    // Using pythagorean theorem calculate distance from district center to start(x,y)
    const startDiffX = startX - x[i];
    const startDiffY = startY - y[i];
    const startDistance = Math.sqrt((startDiffX * startDiffX) + (startDiffY * startDiffY));

    // Using pythagorean theorem calculate distance from district center to end(x,y)
    const endDiffX = endX - x[i];
    const endDiffY = endY - y[i];
    const endDistance = Math.sqrt((endDiffX * endDiffX) + (endDiffY * endDiffY));

    if (startDistance <= r[i] || endDistance <= r[i]) traverseDistrictCounter += 1;
    // if end or start distance <= radius of district increment traverseDistrictCounter
    // console.log(`startDistance: ${startDistance}, endDistance: ${endDistance}`);
    // console.log(`radius: ${r[i]}, traverseDistrictCounter: ${traverseDistrictCounter}`);

    // ?? Check if using a straight line between start and end points if any space between districts
    // Using slope determine if any points between start and end fall into other districts
  }
  return traverseDistrictCounter;
}

module.exports = circleCountry;
