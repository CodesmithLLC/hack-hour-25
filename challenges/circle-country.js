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
  //not perfect, using calculated squares instead of circles
  const checkArr = {};

  for (let i = 0 ; i < x.length ; i += 1){
    //find radius if start_x + start_y was the circle edge
    const dist =Math.hypot(x[i] - start_x, y[i] - start_y);
    //if the dist is less than the radius, that means it lies within the circle
    if(dist < r[i]){
      //remove duplicates
      checkArr[i] = checkArr[i] ? 0 : 1;
    }
  }
  const output = Object.values(checkArr).reduce((a, b) => a + b);
  return output;
}

x = [30,20,40,20,20]
y = [30,20,40,40,50]
r = [1000, 3,3,3,3]

console.log(circleCountry(x,y,r,20,20,40,40))

module.exports = circleCountry;
