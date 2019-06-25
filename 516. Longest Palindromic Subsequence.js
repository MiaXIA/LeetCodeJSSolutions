// Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input:
// "bbbab"
// Output:
// 4
// One possible longest palindromic subsequence is "bbbb".

// Example 2:
// Input:
// "cbbd"
// Output:
// 2
// One possible longest palindromic subsequence is "bb".

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = (s) => {
    var dp = [];
    
    const findLPSLengthRecursive = (st, startIndex, endIndex) => {
        if (startIndex > endIndex) return 0;
        if (startIndex === endIndex) return 1;
        dp[startIndex] = dp[startIndex] || [];
        if (typeof dp[startIndex][endIndex] === 'undefined') {
            if (s[startIndex] === s[endIndex]) {
                dp[startIndex][endIndex] = 2 + findLPSLengthRecursive(s, startIndex + 1, endIndex - 1);
            } else {
                let c1 = findLPSLengthRecursive(s, startIndex + 1, endIndex);
                let c2 = findLPSLengthRecursive(s, startIndex, endIndex - 1);
                dp[startIndex][endIndex] = Math.max(c1, c2);
            }
        }
        return dp[startIndex][endIndex];
    }
    return findLPSLengthRecursive(s, 0, s.length - 1);
};