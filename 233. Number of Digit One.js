// Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

// Example:
// Input: 13
// Output: 6 
// Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = (n) => {
    let res = 0;
    for (let f = 1, remain = Math.floor(n / f); f <= n; f *= 10, remain = Math.floor(n / f)) {
        res += Math.floor((remain + 8) / 10) * f + (remain % 10 === 1) * ((n % f) + 1);
    }
    return res;
};