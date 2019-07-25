// There is a strange printer with the following two special requirements:
// The printer can only print a sequence of the same character each time.
// At each turn, the printer can print new characters starting from and ending at any places, and will cover the original existing characters.
// Given a string consists of lower English letters only, your job is to count the minimum number of turns the printer needed in order to print it.

// Example 1:
// Input: "aaabbb"
// Output: 2
// Explanation: Print "aaa" first and then print "bbb".

// Example 2:
// Input: "aba"
// Output: 2
// Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
// Hint: Length of the given string will not exceed 100.

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = (s) => {
    if (s === null || s.length === 0) return 0;
    let n = s.length;
    let memo = Array(n).fill(0).map(()=>Array(n).fill(0));
    return helper(memo, s, 0, n - 1);
};

const helper = (memo, s, i, j) => {
    if (i > j) return 0;
    if (memo[i][j] !== 0) return memo[i][j];
    let originI = i;
    for (; i + 1 <= j && s.charAt(i + 1) === s.charAt(i); i++);
    let res = 1 + helper(memo, s, i + 1, j);
    for (let m = i + 1; m <= j; m++) {
        if (s.charAt(m) === s.charAt(i)) {
            res = Math.min(res, helper(memo, s, i + 1, m - 1) + helper(memo, s, m, j));
        }
    }
    memo[originI][j] = res;
    return res;
}