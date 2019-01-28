// g is step we're looking for
// start m inclusive
// finish n inclusive
function step2(g, m, n) {
  let first = null;
  let second = null;
  let current = m;
  while (current <= n) {
    if (isPrime(current)) {
      if (!first) {
        first = current;
      } else {
        second = current;
        if (second - first === g) return [first, second];
        first = second;
      }
    }
    current += 1;
  }
  return null;
}

function step(g, m, n) {
  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    const upper = Math.ceil(Math.sqrt(n));
    for (let i = 2; i <= upper; i += 1) {
      if (n % i === 0) return false;
    }
    return true;
  }
  for (let i = m; i <= n; i++) {
    if (isPrime(i) && i + g <= n && isPrime(i + g)) return [i, i + g];
  }
  return null;
}




console.log(isPrime(101));
console.log(step(2, 100, 103));
