// Given integers n and k, find the lexicographically k-th smallest integer in the range from 1 to n.
// Note: 1 ≤ k ≤ n ≤ 109.

// Example:
// Input:
// n: 13   k: 2
// Output:
// 10
// Explanation:
// The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const countForPrefix = (n, prefix) => {
    let a = parseInt(prefix);
    let b = a + 1;
    if (a > n || a === 0) return 0;
    let res = 1;
    a *= 10; b *= 10;
    while (a <= n) {
        res += Math.min(n + 1, b) - a;
        a *= 10;
        b *= 10;
    }
    return res;
}

var findKthNumber = (n, k) => {
    let i, prefix = '';
    while (k !== 0) {
        for (i = 0; i <= 9; i++) {
            const count = countForPrefix(n, prefix + i);
            if (count < k) k -= count;
            else break;
        }
        prefix = prefix + i;
        k--;
    }
    return parseInt(prefix, 10);
};