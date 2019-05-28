// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

// Example:
// Input: 2
// Output: 91 
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
//              excluding 11,22,33,44,55,66,77,88,99

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = (n) => {
    if (n === 0) {
        return 1
    }
    n = Math.min(n, 10)
    let ret = 9
    for (let i = 1, calc = 9; i < n; i++) {
        calc *= 10 - i
        ret += calc
    }
    return ret + 1
};