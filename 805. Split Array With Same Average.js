// In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)
// Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.

// Example :
// Input: 
// [1,2,3,4,5,6,7,8]
// Output: true
// Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have the average of 4.5.

// Note:
// The length of A will be in the range [1, 30].
// A[i] will be in the range of [0, 10000].

/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = (A) => {
    const sum = A.reduce((acc, cur) => acc + cur, 0);
    const n = A.length;
    if (!isSplittable(sum, n)) {
        return false;
    }
    const dp = createCombinationSum(A, n, Math.ceil(n / 2));
    for (let k = 1; k <= n / 2; k++) {
        if ((sum * k) % n === 0 && dp[k].has((sum * k) / n)) {
            return true;
        }
    }
    return false;
};

const isSplittable = (sum, n) => {
    for (let k = 1; k <= n / 2; k++) {
        if ((sum * k) % n === 0) {
            return true;
        }
    }
    return false;
}

const createCombinationSum = (arr, n, k) => {
    let dp = [...new Array(k + 1)].map(() => new Set());
    dp[0].add(0);
    for (let i = 1; i <= n; i++) {
        const next = [...new Array(k + 1)].map(() => new Set());
        next[0].add(0);
            for (let j = 1; j <= k; j++) {
                concat(next[j], dp[j], [...dp[j - 1]].map((val) => val + arr[i - 1]));
            }
        dp = next;
    }
    return dp;
}

const concat = (target, ...args) => {
    for (const set of args) {
        for (const el of set) {
            target.add(el);
        }
    }
}