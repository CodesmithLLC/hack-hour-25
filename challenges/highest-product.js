/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length <= 3) return array.reduce((accum, curr) => accum * curr);
  const sorted = array.sort((a, b) => a - b);
  const negatives = sorted.filter(index => index < 0);
  const positives = sorted.filter(index => index > 0);
  const hasZero = array.includes(0);
  if (negatives.length <= 1) {
    const num = positives.slice(-3);
    return num.reduce((accum, curr) => accum * curr);
  }
  if (positives.length === 0) {
    if (hasZero) {
      return 0;
    }
    const num = negatives.slice(-3);
    return num.reduce((accum, curr) => accum * curr);
  }
  const negPair = negatives.slice(0,2).reduce((accum, curr) => accum * curr);
  const posPair = positives.slice(-2).reduce((accum, curr) => accum * curr);
  return negPair > posPair ? (negPair * positives.slice(-1)[0]) : positives.slice(-3).reduce((accum, curr) => accum * curr);
}

module.exports = highestProduct;
