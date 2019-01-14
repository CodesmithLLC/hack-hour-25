/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(num) {
  const memo = [0, 1];
  function innerFib(n) {
    if (n === 0) return memo[0];
    if (n === 1) return memo[1];
    if (!memo[n]) {
      memo[n] = innerFib(n - 1) + innerFib(n - 2);
    }
    return memo[n];
  }
  return innerFib(num + 1);
}

// console.log(countStairs(2)); // Returns 2
// console.log(countStairs(5)); // Returns 8
// console.log(countStairs(8)); // Returns 34
// console.log(countStairs(10)); // Returns 89

module.exports = countStairs;
