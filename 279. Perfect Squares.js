// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:
// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
const cache = new Map();
var numSquares = (n) => {
  if (cache.has(n)) return cache.get(n);
    if (n === 0) return 0;
    
    const biggestRoot = Math.floor(Math.sqrt(n));
    let best = Infinity;
    for (let i = 1; i <= biggestRoot; i++) {
        const m = i * i;
        best = Math.min(best, 1 + numSquares(n - m));
    }
    cache.set(n, best);
    return best;
};